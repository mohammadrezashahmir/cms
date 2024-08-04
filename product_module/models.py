from django.db import models
from django.utils.text import slugify


class ProductsCategory(models.Model):
    title = models.CharField(max_length=200, verbose_name='نام دسته بندی')
    url_title = models.CharField(max_length=200, verbose_name='نام دسته بندی در url')
    parent = models.ForeignKey('ProductsCategory', on_delete=models.CASCADE, verbose_name='پدر دسته بندی', null=True)

    def __str__(self):
        return self.title


class ProductsBrand(models.Model):
    title = models.CharField(max_length=200, verbose_name='نام برند')
    url_title = models.CharField(max_length=200, verbose_name='نام برند در url')

    def __str__(self):
        return self.title


class Products(models.Model):
    slug = models.SlugField(null=False, db_index=True, verbose_name='اسلاگ محصول')
    title = models.CharField(max_length=200, verbose_name='نام محصول')
    description = models.TextField(verbose_name='توضیحات محصول')
    count = models.IntegerField(verbose_name='تعداد موجود')
    is_active = models.BooleanField(verbose_name='وضعیت', default=True)
    category = models.ManyToManyField('ProductsCategory', verbose_name='دسته بندی های محصول')
    brand = models.ForeignKey('ProductsBrand', on_delete=models.CASCADE, verbose_name='برند محصول')
    date = models.DateField(auto_now_add=True, editable=False)
    image = models.ImageField(upload_to='product_images', verbose_name='نصویر اصلی محصول')
    price = models.IntegerField(verbose_name='قیمت محصول')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class ProductsVisit(models.Model):
    ip = models.CharField(max_length=50)
    product = models.ForeignKey('Products', on_delete=models.CASCADE)
    user = models.ForeignKey('user_module.User', on_delete=models.CASCADE)


class ProductsGallery(models.Model):
    product = models.ForeignKey('Products', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products_image')


class ProductsProperty(models.Model):
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=150)
    product = models.ForeignKey('Products', on_delete=models.CASCADE)
