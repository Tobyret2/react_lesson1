from django.contrib import admin
from .models import Person, PlaceBirth

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('name','family_name','age','place_birth')

admin.site.register(PlaceBirth)
