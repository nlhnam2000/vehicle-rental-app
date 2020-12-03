from rest_framework import serializers

from locations.models import Location
from locations.models import Station
from locations.models import Bike

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('name', 'longitude', 'latitude')
class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ('ID_Bike')
class StationSerializer(serializers.ModelSerializer):
    listBike = serializers.StringRelatedField(read_only=True, many=True)
    class Meta:
        model = Station
        fields = ('name_Station', 'latitude', 'longitude', 'address', 'listBike')
    
    