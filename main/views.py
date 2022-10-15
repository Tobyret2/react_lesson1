from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Person, PlaceBirth
from .serializers import PersonSerializer, PlaceBirthSerializer
@api_view()
def get_all_person(request):
    all_person = Person.objects.all()
    all_person_serializer = PersonSerializer(all_person,many=True)
    return Response(all_person_serializer.data)

