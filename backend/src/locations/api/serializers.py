from rest_framework import serializers

from locations.models import Location
from locations.models import Station
from locations.models import Bike
from locations.models import User
from locations.models import ElecBike
from locations.models import ElecMoto

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('name', 'longitude', 'latitude')

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ('ID_Bike','Available')

class ElecBikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElecBike
        fields = ('ID_EBike','Available')

class ElecMotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElecMoto
        fields = ('ID_EMoto','Available')

class StationSerializer(serializers.ModelSerializer):
    listBike = BikeSerializer(Bike.objects.filter(Available=True) ,many=True)
    listElecBike = ElecBikeSerializer(ElecBike.objects.filter(Available=True), many=True)
    listElecMoto = ElecMotoSerializer(ElecMoto.objects.filter(Available=True), many=True)
    class Meta:
        model = Station
        fields = ('name_Station', 'latitude',
                  'longitude', 'address', 'listBike', 'listElecBike', 'listElecMoto')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username',
                  'email', 'cmnd', 'money', 'history',
                  'pointReward', 'status', 'transportLouer')
