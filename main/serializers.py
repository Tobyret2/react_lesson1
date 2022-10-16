from rest_framework import serializers

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