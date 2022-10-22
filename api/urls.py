from .views import get_category, get_services, get_services_for_text
from django.urls import path


urlpatterns = [
    path('category/',get_category),
    path('services/',get_services),
    path('services/<str:text>',get_services_for_text),
]