import os
from rest_framework import generics, viewsets, status, mixins
from rest_framework.response import Response

from .models import PostsCategory, PostsTag, Posts, PostsGallery, PostsComment

from .serializer import postCategorySerializer, postTagSerializer, \
    postsGallerySerializer, postsSerializer, postSerializer, postCommentSerializer


class getPostCategory(generics.ListAPIView):
    queryset = PostsCategory.objects.all()
    serializer_class = postCategorySerializer


class getPostTag(generics.ListAPIView):
    queryset = PostsTag.objects.all()
    serializer_class = postTagSerializer


class postsAPI(generics.ListAPIView):
    queryset = Posts.objects.filter(is_published=True).order_by('-date')
    serializer_class = postsSerializer


class postAPI(mixins.RetrieveModelMixin,
              mixins.UpdateModelMixin,
              mixins.DestroyModelMixin,
              mixins.CreateModelMixin,
              viewsets.GenericViewSet):
    queryset = Posts.objects.filter(is_published=True).order_by('-date')
    serializer_class = postSerializer

    def get_object(self):
        pk = self.kwargs.get('pk')
        return Posts.objects.get(pk=pk)

    def perform_create(self, serializer):
        gallery_files = self.request.FILES.getlist('gallery')
        post = serializer.save()
        for file in gallery_files:
            PostsGallery.objects.create(post_id=post.id, image=file)

    def perform_update(self, serializer):
        post = self.get_object()
        if os.path.exists(post.main_image.path):
            os.remove(post.main_image.path)
        gallery_files = self.request.FILES.getlist('gallery')
        for file in gallery_files:
            PostsGallery.objects.create(post=post, image=file)
        serializer.save()

    def perform_destroy(self, instance):
        if instance.main_image and os.path.exists(instance.main_image.path):
            os.remove(instance.main_image.path)
        gallery_images = PostsGallery.objects.filter(post=instance)
        for gallery_image in gallery_images:
            if os.path.exists(gallery_image.image.path):
                os.remove(gallery_image.image.path)
            gallery_image.delete()
        instance.delete()


class galleryAPI(generics.DestroyAPIView):
    serializer_class = postsGallerySerializer
    queryset = PostsGallery.objects.all()

    def perform_destroy(self, instance):
        image_path = instance.image.path
        instance.delete()
        if os.path.exists(image_path):
            os.remove(image_path)


class postCommentAPI(viewsets.ModelViewSet):
    queryset = PostsComment.objects.filter(is_active=True, parent=None).order_by('-date')
    serializer_class = postCommentSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        parent_id = self.request.query_params.get('parent_id')
        if parent_id:
            queryset = PostsComment.objects.filter(is_active=True, parent=parent_id).order_by('-date')
        return queryset
