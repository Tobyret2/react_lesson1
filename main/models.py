from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    age = models.IntegerField()
    place_birth  = models.ForeignKey('PlaceBirth',on_delete=models.CASCADE,related_name='person')

class PlaceBirth(models.Model):
    country  = models.CharField(max_length=100)

    def __str__(self):
        return self.country