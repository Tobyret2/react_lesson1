from .views import get_all_person, create_new_person, update_person
from django.urls import path


urlpatterns = [
    path('api/v1/get_person/', get_all_person,name = 'get_all_person'),
    path('api/v1/create_person/', create_new_person,name = 'create_new_person'),
    path('api/v1/update_person/<int:id>', update_person,name = 'update_person'),

]