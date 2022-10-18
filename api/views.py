from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category, Servises
from .serializers import CategorySerializer, ServisesSerializer


@api_view()
def get_category(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories,many=True)
    return Response(serializer.data)

@api_view()
def get_services(request):
    categories = Servises.objects.all()
    serializer = ServisesSerializer(categories,many=True)
    return Response(serializer.data)