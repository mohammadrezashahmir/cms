from rest_framework import viewsets

from .serializer import productSerializer
from product_module.models import Products


class getProductsAPI(viewsets.ModelViewSet):
    queryset = Products.objects.prefetch_related('category__productscategory_set').all()
    serializer_class = productSerializer
