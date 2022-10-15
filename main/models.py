from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    age = models.IntegerField()

class PlaceBirth(models.Model):
    country  = models.CharField(max_length=100)

    def __str__(self):
        return self.country