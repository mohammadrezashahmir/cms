from rest_framework import serializers

from user_module.models import User
from .models import PostsCategory, PostsTag, Posts, PostsGallery
from user_module.serializer import usersSerializer


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


class postsGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsGallery
        fields = ['image']


class postsSerializer(serializers.ModelSerializer):
    gallery = postsGallerySerializer(many=True, required=False)
    tags = serializers.PrimaryKeyRelatedField(many=True, queryset=PostsTag.objects.all())
    category = serializers.PrimaryKeyRelatedField(many=True, queryset=PostsCategory.objects.all())
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Posts
        fields = "__all__"

    def to_representation(self, instance):
        # GET: 
        self.fields['author'] = usersSerializer()
        self.fields['tags'] = postTagSerializer(many=True)
        self.fields['category'] = postCategorySerializer(many=True)
        self.fields['gallery'] = postsGallerySerializer(many=True)  
        return super(postsSerializer, self).to_representation(instance)