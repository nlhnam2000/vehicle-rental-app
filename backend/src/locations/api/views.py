from locations.models import Location
from .serializers import LocationSerializer
from rest_framework import viewsets


class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )


# class LocationListView(ListAPIView):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer


# class LocationDetailView(RetrieveAPIView):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer


# class LocationCreateView(CreateAPIView):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer


# class LocationUpdateView(UpdateAPIView):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer


# class LocationDeleteView(DestroyAPIView):
#     queryset = Location.objects.all()
#     serializer_class = LocationSerializer
