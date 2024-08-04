from rest_framework import serializers
from product_module.models import Products


class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"
