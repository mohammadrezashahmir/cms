# Generated by Django 5.0.6 on 2024-08-03 09:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product_module', '0004_delete_productsbrand_delete_productscategory'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductsBrand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='نام برند')),
                ('url_title', models.CharField(max_length=200, verbose_name='نام برند در url')),
            ],
        ),
        migrations.CreateModel(
            name='ProductsCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='نام دسته بندی')),
                ('url_title', models.CharField(max_length=200, verbose_name='نام دسته بندی در url')),
                ('parent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='product_module.productscategory', verbose_name='پدر دسته بندی')),
            ],
        ),
    ]
