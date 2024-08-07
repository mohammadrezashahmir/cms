from django.urls import path
from . import views

urlpatterns = [
    path('getCategory/', views.getPostCategory.as_view()),
    path('getTag/', views.getPostTag.as_view()),
    path('add-post/', views.add_post.as_view(),name='add_post_page')
]
