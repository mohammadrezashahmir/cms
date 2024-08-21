from django.http import HttpRequest
from django.shortcuts import render
from django.views import View
from rest_framework import generics, viewsets, status
from rest_framework.response import Response

from .models import PostsCategory, PostsTag, Posts, PostsGallery

from .serializer import postCategorySerializer, postTagSerializer, postsSerializer


class getPostCategory(generics.ListAPIView):
    queryset = PostsCategory.objects.all()
    serializer_class = postCategorySerializer


class getPostTag(generics.ListAPIView):
    queryset = PostsTag.objects.all()
    serializer_class = postTagSerializer


class postsAPI(viewsets.ModelViewSet):
    queryset = Posts.objects.filter(is_published=True).order_by('-date')
    serializer_class = postsSerializer
    
    def perform_create(self, serializer):
        print(self.request.POST)
        gallery_files = self.request.FILES.getlist('gallery')
        post_id = serializer.save().id
        for file in gallery_files:
            PostsGallery.objects.create(post_id=post_id, image=file)
        return Response({"detail": "Post created successfully."}, status=status.HTTP_201_CREATED)

    def perform_update(self, serializer):
        post = serializer.save()
        post.gallery.all().delete()
        gallery_files = self.request.FILES.getlist('gallery')
        for file in gallery_files:
            PostsGallery.objects.create(post=post, image=file)
        return Response({"detail": "Post updated successfully."}, status=status.HTTP_200_OK)
