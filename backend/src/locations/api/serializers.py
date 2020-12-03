from rest_framework import serializers

from locations.models import Location
from locations.models import Station

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('name', 'longitude', 'latitude')

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ('name_Station', 'latitude', 'longitude', 'address')