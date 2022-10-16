from django.db import models

class Category(models.Model):
    name = models.CharField('Категория', max_length=255)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Servises(models.Model):
    title = models.CharField('Услуга', max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.title