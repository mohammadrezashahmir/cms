from datetime import datetime

from django.core.exceptions import ValidationError
from django.utils import timezone
from django.utils.crypto import get_random_string
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.tokens import RefreshToken
from .decorators import user_not_access
from .serializer import usersSerializer
from .forms import register_form, login_form, forget_password_form, reset_password_form, change_password_form
from .models import User
from services_module.send_email import send_email

def limit_email_ask(last_ask):
    if last_ask is not None:
        now = timezone.now()
        then = last_ask
        tdelta = now - then
        minutes = tdelta.total_seconds() / 60
        if minutes <= 30:
           return False
    return True

@api_view(['POST'])
@user_not_access()
def register_user(request):
    form = register_form(request.data)
    if form.is_valid():

        email = form.cleaned_data.get('email')
        username = form.cleaned_data.get('user_name')
        password = form.cleaned_data.get('password')

        if User.objects.filter(email__iexact=email).exists() or User.objects.filter(username__iexact=username).exists():
            return Response({'details': 'این ایمیل یا نام کاربری قبلا ثبت شده است'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            activation_code=get_random_string(72),
            username=username,
            email=email,
            is_active=False
        )
        user.set_password(password)
        send_email('فعال سازی حساب کاربری', user.email, {'code': user.activation_code}, 'user/activate_account.html')
        user.save()
        return Response(
            {'details': f'ثبت نام با موفقیت انجام شد، لینکی برای فعالسازی حساب شما به ایمیل {user.email} ارسال شد'},
            status=status.HTTP_201_CREATED)

    return Response({'details': 'خطا در اطلاعات ورودی'},
                    status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def activate_account(request, code):
    try:
        user = User.objects.filter(activation_code__iexact=code).first()
        if user is not None:
            user.is_active = True
            user.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'details': f'حساب کاربری شما ({user.email}) با موفقیت فعال شد.',
            }, status=status.HTTP_200_OK)
        else:
            return Response({'details': 'چنین کاربری با این کد وجود ندارد'},
                            status=status.HTTP_400_BAD_REQUEST)

    except ValidationError as e:
        return Response({'details': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({'details': 'مشکلی پیش آمد، لطفا دوباره تلاش کنید'},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@user_not_access()
def login_user(request):
    form = login_form(request.data)
    if form.is_valid():
        user_email = form.cleaned_data.get('email')
        user_password = form.cleaned_data.get('password')
        user = User.objects.filter(email__iexact=user_email).first()
        if user is not None:
            if user.is_active:
                is_correct = user.check_password(user_password)
                if is_correct:
                    user.last_login = timezone.now()
                    user.save(update_fields=['last_login'])
                    refresh = RefreshToken.for_user(user)
                    return Response({
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                        'details': 'ورود با موفقیت انجام شد'
                    }, status=status.HTTP_200_OK)
                else:
                    return Response({'details': 'ایمیل یا کلمه عبور اشتباه وارد شده است'},
                                    status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({'details': 'حساب این کاربر فعال نیست یا قبلا بلاک شده است'},
                                status=status.HTTP_406_NOT_ACCEPTABLE)

        else:
            return Response({'details': 'چنین کاربری وجود ندارد'},
                            status=status.HTTP_400_BAD_REQUEST)
    return Response({'details': 'خطا در اطلاعات ورودی'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])

def forget_password(request):
    form = forget_password_form(request.data)
    if form.is_valid():
        user_email = form.cleaned_data.get('email')
        user: User = User.objects.filter(email__iexact=user_email).first()
        access = limit_email_ask(user.last_email_ask)
        if not access:
            return Response({'details': 'برای ثبت درخواست جدید باید از آخرین درخواست شما 30 دقیقه بگذرد'},
                     status.HTTP_403_FORBIDDEN)
        if user is not None:
            send_email('بازیابی حساب شما در کارگ', user_email, {'code': user.activation_code},
                       'user/reset_password_email.html')
            user.last_email_ask = timezone.now()
            user.save(update_fields=['last_email_ask'])
            return Response({'details': f'لینکی برای بازیابی حساب شما به ایمیل {user_email} ارسال شد'},
                            status=status.HTTP_200_OK)
        else:
            return Response({'details': f'چنین کاربری پیدا نشد'},
                            status=status.HTTP_400_BAD_REQUEST)
    return Response({'details': 'خطا در اطلاعات ورودی'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def reset_password(request,code):
    user = User.objects.filter(activation_code__iexact=code).first()
    if user is None:
        return Response({'details': 'چنین کاربری وجود ندارد'}, status=status.HTTP_400_BAD_REQUEST)
    form = reset_password_form(request.data)
    if form.is_valid():
        password = form.cleaned_data.get('password')
        user.set_password(password)
        user.email_code = get_random_string(72)
        user.is_active = True
        user.save()
        return Response({'details': 'رمزعبور با موفقیت تغییر کرد'}, status=status.HTTP_200_OK)
    return Response({'details': 'خطا در اطلاعات ورودی'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    form = change_password_form(request.data)
    if form.is_valid():
        current_password = form.cleaned_data['current_password']
        is_correct: bool = request.user.check_password(current_password)
        if is_correct:
            new_password = form.cleaned_data['new_password']
            request.user.set_password(new_password)
            tokens = OutstandingToken.objects.filter(user=request.user)
            for token in tokens:
                token.blacklist()
            refresh = RefreshToken.for_user(request.user)

            return Response({
                'details': 'کلمه عبور با موفقیت تغییر یافت',
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }, status=status.HTTP_200_OK)
        else:
            return Response({'details': 'کلمه عبور فعلی اشتباه وارد شده است'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'details': 'خطا در اطلاعات ورودی'}, status=status.HTTP_400_BAD_REQUEST)


class getAdminUsers(generics.ListAPIView):
    queryset = User.objects.filter(is_active=True, is_superuser=True)
    serializer_class = usersSerializer


class userList(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.filter(is_active=True)
    serializer_class = usersSerializer

