from django.urls import path, include
from . import views
from user_module.dashboard import views as dashboard_views

urlpatterns = [
    path('', views.admin_page, name='admin_page'),
    path('dashboard/', include('user_module.dashboard.urls')),
    path('products/', include('product_module.admin_manage.urls')),
    path('posts/', include('post_module.urls')),
]
