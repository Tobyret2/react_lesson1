from rest_framework import serializers
from .models import Person

class PlaceBirthSerializer(serializers.Serializer):
    country  = serializers.CharField(max_length=100)
    pk = serializers.IntegerField()

class PersonSerializer(serializers.Serializer):
    pk = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    family_name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()
    place_birth  = PlaceBirthSerializer()

class PersonDeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    family_name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()
    place_birth_id  = serializers.CharField()


class PersonDeSerializerV2(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    family_name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()
    place_birth_id  = serializers.CharField()

    def create(self, validated_data):
        return Person.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.family_name = validated_data.get('family_name', instance.family_name)
        instance.age = validated_data.get('age', instance.age)
        instance.place_birth_id = validated_data.get('place_birth_id',instance.place_birth_id)
        instance.save()
        return instance