from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('', views.postsAPI)
urlpatterns = [
    # api:
    path('getCategory/', views.getPostCategory.as_view()),
    path('getTag/', views.getPostTag.as_view()),
    path('listCreate/', include(router.urls)),

]
