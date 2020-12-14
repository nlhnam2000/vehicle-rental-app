from rest_framework import viewsets
from locations.models import Location, Station, User
from .serializers import LocationSerializer, StationSerializer, UserSerializer


class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

class StationViewSet(viewsets.ModelViewSet):
    serializer_class = StationSerializer
    queryset = Station.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'username'
