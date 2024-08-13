from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from admin_module.views import redirect_to_layout
from cms import settings

urlpatterns = [
    path('', include('main_page_module.urls')),
    path('api/', include('api_module.urls')),
    path('admin/', include('admin_module.urls')),
    path('user/', include('user_module.urls')),
    re_path(r'^.*$', redirect_to_layout),
]
urlpatterns = urlpatterns + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
