from django.urls import path, include
from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register('manage', views.postsAPI)
router.register('comments', views.postCommentAPI)
router.register('gallery', views.galleryAPI)
urlpatterns = [
    # api:
    path('category/', views.postCategory.as_view()),
    path('tag/', views.postTag.as_view()),

]
urlpatterns += router.urls
