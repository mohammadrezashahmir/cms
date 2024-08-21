from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('', views.postsAPI)
urlpatterns = [
    # api:
    path('manage/', include(router.urls)),
    path('getCategory/', views.getPostCategory.as_view()),
    path('getTag/', views.getPostTag.as_view()),

]
