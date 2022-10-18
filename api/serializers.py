from rest_framework import serializers


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField()
    slug = serializers.SlugField()

class ServisesSerializer(serializers.Serializer):
    title = serializers.CharField( max_length=255)
    price = serializers.DecimalField(max_digits=8, decimal_places=2)
    slug = serializers.SlugField()
    category = CategorySerializer()