from django.db import models
from user_module.models import User


class PostsCategory(models.Model):
    parent = models.ForeignKey('PostsCategory', on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)


class PostsTag(models.Model):
    title = models.CharField(max_length=200)
    url_title = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)


class Posts(models.Model):
    title = models.CharField(max_length=300)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, editable=False)
    category = models.ManyToManyField('PostsCategory')
    is_published = models.BooleanField(default=False)
    show_author = models.BooleanField(default=True)
    main_image = models.ImageField(upload_to='post_images')
    caption = models.CharField(max_length=300)


class PostsGallery(models.Model):
    post = models.ForeignKey('Posts', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='post_images')


class PostVisit(models.Model):
    ip = models.CharField(max_length=50)
    post = models.ForeignKey('Posts', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class PostsComment(models.Model):
    parent = models.ForeignKey('PostsComment', on_delete=models.CASCADE, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, editable=False)
    content = models.TextField()
    is_active = models.BooleanField(default=True)
