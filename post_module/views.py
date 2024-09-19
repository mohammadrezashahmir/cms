import os
from rest_framework import generics, viewsets
from services_module.pagination import LargeResultsSetPagination
from .models import PostsCategory, PostsTag, Posts, PostsGallery, PostsComment
from .serializer import postCategorySerializer, postTagSerializer, \
    postsGallerySerializer, postsSerializer, postCommentSerializer


class postCategory(generics.ListCreateAPIView):
    queryset = PostsCategory.objects.all()
    serializer_class = postCategorySerializer


class postTag(generics.ListCreateAPIView):
    queryset = PostsTag.objects.all()
    serializer_class = postTagSerializer


class galleryAPI(viewsets.ModelViewSet):
    serializer_class = postsGallerySerializer
    queryset = PostsGallery.objects.all()

    def get_queryset(self):
        post_id = self.request.query_params.get('post', None)
        if post_id:
            return PostsGallery.objects.filter(post_id=post_id)
        return PostsGallery.objects.all()

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
        post_id = self.request.query_params.get('post_id')
        if post_id:
            queryset = queryset.filter(post_id=post_id)
        parent_id = self.request.query_params.get('parent_id')
        if parent_id:
            queryset = PostsComment.objects.filter(is_active=True, parent=parent_id).order_by('-date')
        return queryset


class postsAPI(viewsets.ModelViewSet):
    queryset = Posts.objects.filter(is_published=True).order_by('-date')
    serializer_class = postsSerializer
    pagination_class = LargeResultsSetPagination

    def add_gallery_files(self,post_id):
        gallery_files = self.request.FILES.getlist('gallery')
        for file in gallery_files:
            PostsGallery.objects.create(post_id=post_id, image=file)

    def get_object(self):
        pk = self.kwargs.get('pk')
        return Posts.objects.get(pk=pk)

    def perform_create(self, serializer):
        post = serializer.save()
        self.add_gallery_files(post.id)

    def perform_update(self, serializer):
        post = self.get_object()
        if os.path.exists(post.main_image.path):
            os.remove(post.main_image.path)
        self.add_gallery_files(post.id)
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
