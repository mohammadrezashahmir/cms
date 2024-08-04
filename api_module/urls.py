from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('auth-token/', obtain_auth_token),
    path('posts/', include('post_module.urls')),
    path('users/', include('user_module.urls')),
]
