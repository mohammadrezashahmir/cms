from django.conf.urls.static import static
from django.urls import path, include
from cms import settings
urlpatterns = [
    path('', include('main_page_module.urls')),
    path('api/', include('api_module.urls')),
    path('admin/', include('admin_module.urls')),
    path('user/', include('user_module.urls')),
]
urlpatterns = urlpatterns + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
