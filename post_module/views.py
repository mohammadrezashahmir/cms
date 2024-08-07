from django.http import HttpRequest
from django.shortcuts import render
from django.views import View
from rest_framework import generics
from .models import PostsCategory, PostsTag

from .serializer import postCategorySerializer, postTagSerializer


class getPostCategory(generics.ListAPIView):
    queryset = PostsCategory.objects.filter(is_active=True)
    serializer_class = postCategorySerializer


class getPostTag(generics.ListAPIView):
    queryset = PostsTag.objects.filter(is_active=True)
    serializer_class = postTagSerializer


class add_post(View):
    def get(self, request: HttpRequest):
        return render(request, '_layout.html')
