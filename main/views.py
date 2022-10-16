from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Person, PlaceBirth
from .serializers import PersonSerializer, PlaceBirthSerializer, PersonDeSerializer


@api_view()
def get_all_person(request):
    all_person = Person.objects.all()
    all_person_serializer = PersonSerializer(all_person,many=True)
    return Response(all_person_serializer.data)


@api_view(['POST'])
def create_new_person(request):
    new_person = PersonDeSerializer(data=request.data)
    new_person.is_valid(raise_exception=True)
    if new_person.is_valid():
        id_place = int(PlaceBirth.objects.get(country=new_person.validated_data['place_birth_id']).pk)
        new_person.validated_data['place_birth_id'] = id_place # изменил значение на ID
        new = Person(**new_person.validated_data)
        new.save()

    return Response(new_person.validated_data)

@api_view(['PUT'])
def update_person(request,id):
    try:
        update_person = Person.objects.get(pk=id)
    except:
        return Response({'error': 'object is not exists'})
    update_person_date = PersonDeSerializer(data=request.data, instance=update_person)

    print(update_person_date)
    if update_person_date.is_valid(raise_exception=True):
        update_person.name = update_person_date.validated_data.get('name',update_person.name)
        update_person.family_name = update_person_date.validated_data.get('family_name',update_person.family_name)
        update_person.age = update_person_date.validated_data.get('age',update_person.age)
        update_person.place_birth_id = update_person_date.validated_data.get('place_birth_id',update_person.place_birth_id)
        update_person.save()


    return Response(update_person_date.validated_data)