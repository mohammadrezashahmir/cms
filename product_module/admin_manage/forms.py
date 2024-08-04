from django import forms
from django.core.exceptions import ValidationError

from product_module.models import ProductsCategory, ProductsBrand


class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = [single_file_clean(data, initial)]
        return result


class add_product_form(forms.Form):
    title = forms.CharField(max_length=200, label='نام ', widget=forms.TextInput({
        'class': 'form-control',
        'placeholder': 'متن ورودی',
    }), error_messages={
        'required': 'این فیلد اجباری است'
    })
    count = forms.IntegerField(label='تعداد', widget=forms.NumberInput({
        'class': 'form-control',
        'placeholder': ' ورودی',
        'invalid': 'مقدار وارد شده نامعتبر است',
    }), error_messages={
        'required': 'این فیلد اجباری است'
    })
    category = forms.ModelMultipleChoiceField(
        label='دسته بندی ',
        queryset=ProductsCategory.objects.all(),
        widget=forms.SelectMultiple(attrs={
            'class': 'form-select',
        }), error_messages={
            'required': 'این فیلد اجباری است'
        }
    )
    brand = forms.ModelChoiceField(label='برند ', queryset=ProductsBrand.objects.all(), widget=forms.Select({
        'class': ' form-select',
    }), error_messages={
        'required': 'این فیلد اجباری است'
    })
    price = forms.IntegerField(label='قیمت (تومان) ', widget=forms.TextInput({
        'class': 'form-control',
        'placeholder': ' ورودی',
    }), error_messages={
        'required': 'این فیلد اجباری است',
        'invalid': 'مقدار وارد شده نامعتبر است',
    })
    description = forms.CharField(label='توضیحات ', widget=forms.Textarea({
        'class': 'editor',
        'data-simple-toolbar': 'true',
        'placeholder': '...توضیحات'
    }), error_messages={
        'required': 'این فیلد اجباری است'
    })
    is_active = forms.BooleanField(label='وضعیت فعال بودن', widget=forms.CheckboxInput({
        'class': 'form-check-switch',
    }), required=False)
    image = forms.ImageField(label='تصویر اصلی', error_messages={
        'required': 'این فیلد اجباری است'
    })
    gallery = MultipleFileField(label='گالری تصاویر', required=False)
    props = forms.CharField(widget=forms.HiddenInput({
        'id': 'id_props'
    }), required=False, )


