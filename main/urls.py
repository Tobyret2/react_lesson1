from .views import get_all_person, create_new_person, update_person, get_country_person, create_new_person_v2, \
    update_person_v2, get_one_person, delete_person
from django.urls import path


urlpatterns = [
    path('api/v1/get_person/', get_all_person,name = 'get_all_person'),
    path('api/v1/get_one_person/<int:id>', get_one_person,name = 'get_one_person'),
    path('api/v1/delete/<int:id>', delete_person,name = 'get_one_person'),
    path('api/v1/get_person/<str:country>', get_country_person,name = 'get_all_person'),
    path('api/v1/create_person/', create_new_person,name = 'create_new_person'),
    path('api/v2/create_person/', create_new_person_v2,name = 'create_new_person_v2'),
    path('api/v1/update_person/<int:id>', update_person,name = 'update_person'),
    path('api/v2/update_person/<int:id>', update_person_v2,name = 'update_person_v2'),

]