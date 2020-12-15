from django.urls import path
from . import views

urlpatterns = [
    path('Trouver', views.TrouverPosition),
    path('Louer', views.LouerTransport),
    path('Revenir', views.RevenirTransport),
    path('Payer', views.PayerTransport)
]
