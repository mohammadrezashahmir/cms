from django.urls import path, include
from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('manage', views.postAPI)
router.register('comments', views.postCommentAPI)
urlpatterns = [
    # api:
    path('list/', views.postsAPI.as_view()),
    path('getCategory/', views.getPostCategory.as_view()),
    path('getTag/', views.getPostTag.as_view()),
    path('gallery/<int:pk>/', views.galleryAPI.as_view()),

]
urlpatterns += router.urls
