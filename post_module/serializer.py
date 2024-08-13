from rest_framework import serializers
from .models import PostsCategory, PostsTag, Posts, PostsGallery


class postCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsCategory
        fields = [
            'id',
            'title',
        ]


class postTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsTag
        fields = [
            'id',
            'title',
        ]


class PostsGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsGallery
        fields = ['image']


class postsSerializer(serializers.ModelSerializer):
    gallery = PostsGallerySerializer(many=True, required=False)

    class Meta:
        model = Posts
        fields = "__all__"
