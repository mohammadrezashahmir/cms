from rest_framework import serializers

from user_module.models import User
from .models import PostsCategory, PostsTag, Posts, PostsGallery, PostsComment
from user_module.serializer import usersSerializer


class postCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsCategory
        fields = '__all__'


class postTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsTag
        fields = '__all__'


class postsGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = PostsGallery
        fields = '__all__'


class postCommentSerializer(serializers.ModelSerializer):
    reply_count = serializers.SerializerMethodField()

    class Meta:
        model = PostsComment
        fields = "__all__"

    def to_representation(self, instance):
        self.fields['author'] = usersSerializer()
        return super().to_representation(instance)

    def get_reply_count(self, obj):
        return PostsComment.objects.filter(parent=obj.id, is_active=True).count()


class postsSerializer(serializers.ModelSerializer):
    gallery = postsGallerySerializer(many=True,read_only=True)
    total_comments = serializers.SerializerMethodField()
    class Meta:
        model = Posts
        fields = "__all__"
    def get_total_comments(self, obj):
        return PostsComment.objects.filter(post=obj, is_active=True).count()
