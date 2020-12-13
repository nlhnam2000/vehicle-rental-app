import sys
import json
from django.core import serializers
from django.http import JsonResponse
from geopy.distance import geodesic
from rest_framework.decorators import api_view
from locations.api.serializers import UserSerializer
from .models import Station, User, Bike, ElecBike, ElecMoto

# Create your views here.
def TrouverPosition(request):
    longitude = request.GET.get('longitude', '')
    latitude = request.GET.get('latitude', '')
    position_Now = (latitude, longitude)
    serializers_stations = serializers.serialize('json', Station.objects.all())
    listStation = json.loads(serializers_stations)
    Min = sys.maxsize
    for station in listStation:
        position_Station = (
            station['fields']['latitude'], station['fields']['longitude'])
        temp = geodesic(position_Now, position_Station).km
        if(temp < Min):
            Min = temp
            result = station
    result1 = {'result': result['fields'], 'distance': Min}
    return JsonResponse(result1)

@api_view(['GET', 'POST'])
def LouerTransport(request):
    user_name = request.data["username"]
    transport = request.data["transport"]
    station = request.data["selectedStation"]
    user = User.objects.get(username=user_name)
    user.status = not(user.status)
    user.transportLouer = transport
    user.stationDepart = station
    user.save()
    if (transport[0] == 'B'):
        bike = Bike.objects.get(ID_Bike=transport)
        bike.Available = False
        bike.save()
    else:
        if (transport[0:2] == 'EB'):
            ebike = ElecBike.objects.get(ID_EBike=transport)
            ebike.Available = False
            ebike.save()
        else:
            emoto = ElecMoto.objects.get(ID_EMoto=transport)
            emoto.Available = False
            emoto.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)

@api_view(['GET', 'POST'])
def PayerTransport(request):
    user_name = request.data["username"]
    user = User.objects.get(username=user_name)
    user.status = not(user.status)
    transport = user.transportLouer
    if (transport[0] == 'B'):
        bike = Bike.objects.get(ID_Bike=transport)
        bike.Available = True
        bike.save()
    else:
        if (transport[0:2] == 'EB'):
            ebike = ElecBike.objects.get(ID_EBike=transport)
            ebike.Available = True
            ebike.save()
        else:
            emoto = ElecMoto.objects.get(ID_EMoto=transport)
            emoto.Available = True
            emoto.save()
    user.transportLouer = ''
    user.stationDepart = ''
    user.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)
    