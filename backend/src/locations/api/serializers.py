from rest_framework import serializers

from locations.models import Location
from locations.models import Station
from locations.models import Bike
from locations.models import User
from locations.models import ElecBike
from locations.models import ElecMoto
from locations.models import Rent_Detail


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('name', 'longitude', 'latitude')


class BikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bike
        fields = ('ID_Bike', 'Available')


class ElecBikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElecBike
        fields = ('ID_EBike', 'Available')


class ElecMotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElecMoto
        fields = ('ID_EMoto', 'Available')


class StationSerializer(serializers.ModelSerializer):
    listBike = BikeSerializer(many=True)
    listElecBike = ElecBikeSerializer(many=True)
    listElecMoto = ElecMotoSerializer(many=True)

    class Meta:
        model = Station
        fields = ('name_Station', 'latitude',
                  'longitude', 'address', 'listBike', 'listElecBike', 'listElecMoto')


class RentDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent_Detail
        fields = ('timeDepart', 'timeArrive',
                  'stationDepart', 'stationArrive',
                  'cost')


class UserSerializer(serializers.ModelSerializer):
    history = RentDetailSerializer(many=True, read_only=True)
<<<<<<< HEAD
=======

>>>>>>> master
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username',
                  'email', 'cmnd', 'money', 'history',
                  'pointReward', 'status', 'transportLouer', 'stationDepart', 'tempsDepart', "isGiveBack")
