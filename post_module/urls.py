from django.urls import path
from . import views

urlpatterns = [
    path('getCategory/', views.getPostCategory.as_view()),
    path('getTag/', views.getPostTag.as_view()),
]
