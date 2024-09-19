from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    # authentication:
    path('login/', views.login_user, name='login_page'),
    path('register/', views.register_user, name='register_page'),
    path('activate/<code>/', views.activate_account, name='activate_page'),
    path('forget/', views.forget_password, name='forget_password_page'),
    path('reset-password/<code>/', views.reset_password, name='reset_password_page'),
    path('change-password/', views.change_password, name='change_password_page'),
    # api:
    path('admin-users/', views.getAdminUsers.as_view()),
    path('manage/<int:pk>/', views.userList.as_view(), name='manage_user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

