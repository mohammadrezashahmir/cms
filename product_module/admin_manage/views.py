from django.core.exceptions import ValidationError
from django.http import HttpRequest, JsonResponse, Http404
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.views.generic import ListView
from .forms import add_product_form
from product_module.models import Products, ProductsProperty, ProductsGallery
import json


class add_product_page(View):
    def get(self, request: HttpRequest):
        form = add_product_form()
        return render(request, 'admin/products/add-product-forms.html', context={
            'form': form
        })

    def post(self, request: HttpRequest):
        form = add_product_form(request.POST, request.FILES)
        if form.is_valid():
            try:
                cleaned_data = form.cleaned_data
                brand_id = cleaned_data['brand'].id
                new_product = Products(
                    title=cleaned_data['title'],
                    description=cleaned_data['description'],
                    count=cleaned_data['count'],
                    is_active=cleaned_data['is_active'],
                    image=cleaned_data['image'],
                    price=cleaned_data['price'],
                    brand_id=brand_id,
                )
                new_product.save()
                # adding category:
                categories = cleaned_data['category']
                new_product.category.set(categories)
                # adding props:
                if cleaned_data['props']:
                    props = json.loads(cleaned_data['props'])
                    for prop in props:
                        new_prop = ProductsProperty(
                            key=prop['key'],
                            value=prop['value'],
                            product_id=new_product.id
                        )
                        new_prop.save()
                # adding gallery:
                if cleaned_data['gallery']:
                    for img in cleaned_data['gallery']:
                        new_img = ProductsGallery(
                            image=img,
                            product_id=new_product.id
                        )
                        new_img.save()
                return redirect(reverse('add_product_page'))
            except Exception as e:
                raise ValidationError(f' {e}:در فرایند ذخیره محصول مشکلی پیش آمد')
        return render(request, 'admin/products/add-product-forms.html', context={
            'form': form
        })


class product_list_page(ListView):
    template_name = 'admin/products/product_list_page.html'
    model = Products
    context_object_name = 'products'
    paginate_by = 10
    ordering = [
        '-date'
    ]
    queryset = Products.objects.all().prefetch_related(
        'category__products_set',
        'productsgallery_set',
    )

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['count_all'] = self.object_list.count()
        return context

    def get_queryset(self, *args, **kwargs):
        queryset = super().get_queryset()
        try:
            if self.request.GET.get('search'):
                queryset = queryset.filter(title__contains=self.request.GET.get('search'))
        except Exception as e:
            raise ValidationError(f'{e}:مشکلی پیش امد')
        return queryset


def delete_product(request: HttpRequest):
    status = {
        'title': 'حذف محصول',
        'icon': 'success',
        'message': 'این کالا با موفقیت حذف شد!'
    }
    try:
        product_id = int(request.GET.get('product_id'))
        product: Products = Products.objects.filter(id=product_id).first()
        if product:
            product.delete()
    except:
        status.icon = 'error'
        status.message = 'حذف کالا ناموفق بود'
    return JsonResponse(
        status
    )


class product_edit_page(View):
    def get(self, request: HttpRequest, product_id):
        product: Products = Products.objects.filter(id=product_id).first()
        if product is None:
            raise Http404()
        product_gallery = ProductsGallery.objects.filter(product_id=product.id)
        product_props = ProductsProperty.objects.filter(product_id=product.id)
        props_list = []
        for prop in product_props:
            props_list.append({
                'key': prop.key,
                'value': prop.value,
            })
        props_list = json.dumps(props_list)
        gallery_list = []
        for img in product_gallery:
            gallery_list.append(img.image.url)
        form = add_product_form(initial={
            'title': product.title,
            'count': product.count,
            'category': product.category.all(),
            'brand': product.brand,
            'price': product.price,
            'is_active': product.is_active,
            'description': product.description,
            'image': product.image,
            'gallery': gallery_list,
            'props': props_list,
        })
        return render(request, 'admin/products/edit-product-forms.html', context={
            'form': form,
            'product_id': product.id,
        })

    def post(self, request: HttpRequest, product_id):
        form = add_product_form(request.POST, request.FILES)
        product: Products = Products.objects.filter(id=product_id).first()
        if not request.FILES.get('image'):
            request.FILES.setdefault('image', product.image)
        if form.is_valid():
            try:
                cleaned_data = form.cleaned_data
                brand_id = cleaned_data['brand'].id
                product.title = cleaned_data['title']
                product.description = cleaned_data['description']
                product.count = cleaned_data['count']
                product.is_active = cleaned_data['is_active']
                product.image = cleaned_data['image']
                product.price = cleaned_data['price']
                product.brand_id = brand_id
                product.save()
                # adding category:
                categories = cleaned_data['category']
                product.category.set(categories)
                # adding props:
                if cleaned_data['props']:
                    props = json.loads(cleaned_data['props'])
                    ProductsProperty.objects.filter(product_id=product.id).delete()
                    for prop in props:
                        new_prop = ProductsProperty(
                            key=prop['key'],
                            value=prop['value'],
                            product_id=product.id
                        )
                        new_prop.save()
                # adding gallery:
                if cleaned_data['gallery']:
                    ProductsGallery.objects.filter(product_id=product.id).delete()
                    for img in cleaned_data['gallery']:
                        new_img = ProductsGallery(
                            image=img,
                            product_id=product.id
                        )
                        new_img.save()
                return redirect(reverse('edit_product_page', args=[product.id]))
            except Exception as e:
                raise ValidationError(f' {e}:در فرایند ویرایش محصول مشکلی پیش آمد')
        return render(request, 'admin/products/edit-product-forms.html', context={
            'form': form,
            'product_id': product_id,
        })


