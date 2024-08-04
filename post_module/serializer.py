from rest_framework import serializers
from .models import PostsCategory, PostsTag


class postCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsCategory
        fields = [
            'id',
            'title',
        ]


class postTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsCategory
        fields = [
            'id',
            'title',
        ]
