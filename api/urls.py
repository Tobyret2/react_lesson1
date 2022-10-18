from .views import get_category, get_services
from django.urls import path


urlpatterns = [
    path('category/',get_category),
    path('services/',get_services),
]