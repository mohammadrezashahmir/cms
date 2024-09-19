import time
from datetime import datetime

from rest_framework.response import Response


def user_not_access():
    def decorator(func):
        def wrapper(request, *args, **kwargs):
            if request.user.is_authenticated:
                return Response({'details': 'access denied'}, status=403)
            else:
                return func(request, *args, **kwargs)
        return wrapper
    return decorator

