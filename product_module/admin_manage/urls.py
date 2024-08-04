from django.urls import path

from . import views


urlpatterns = [
    path('', views.product_list_page.as_view(), name='product_list_page'),
    path('add-product/', views.add_product_page.as_view(), name='add_product_page'),
    path('edit-product/<product_id>', views.product_edit_page.as_view(), name='edit_product_page'),
    path('delete-product/', views.delete_product, name='delete_product_page'),
]
