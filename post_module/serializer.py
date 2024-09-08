from django.db.models import QuerySet
from rest_framework import serializers

from user_module.models import User
from .models import PostsCategory, PostsTag, Posts, PostsGallery, PostsComment
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
        fields = ['id', 'image']


class postCommentSerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(default=True)
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
    author = usersSerializer(read_only=True)
    tags = postTagSerializer(many=True, read_only=True)
    category = postCategorySerializer(many=True, read_only=True)
    comment = serializers.SerializerMethodField()
    total_comments = serializers.SerializerMethodField()

    class Meta:
        model = Posts
        fields = "__all__"

    def get_comment(self, obj):
        queryset = PostsComment.objects.filter(post=obj, is_active=True, parent=None).order_by('-date')
        return postCommentSerializer(queryset, many=True).data

    def get_total_comments(self, obj):
        return PostsComment.objects.filter(post=obj, is_active=True).count()


class postSerializer(serializers.ModelSerializer):
    gallery = postsGallerySerializer(many=True, read_only=True)

    class Meta:
        model = Posts
        fields = "__all__"
