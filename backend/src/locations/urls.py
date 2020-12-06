from django.urls import path
from . import views

urlpatterns = [
    path('Trouver', views.TrouverPosition)
]
