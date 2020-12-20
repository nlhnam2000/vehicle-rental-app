import sys
import json
from datetime import datetime
from django.core import serializers
from django.http import JsonResponse
from geopy.distance import geodesic
from rest_framework.decorators import api_view
from locations.api.serializers import UserSerializer
from .models import Station, User, Bike, ElecBike, ElecMoto, Rent_Detail, Award

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


def getDateTimeNow():
    now = datetime.now()
    return now.strftime("%d/%m/%Y %H:%M:%S")


def CalculateMoney(timeDepart, timeArrive):
    time = datetime.strptime(timeArrive,
                             "%d/%m/%Y %H:%M:%S") - datetime.strptime(timeDepart,
                                                                      "%d/%m/%Y %H:%M:%S")
    if (int(time.total_seconds()) < 3600):
        return 10000 + int(time.total_seconds()) / 3600 * 10000
    else:
        return 8000 + int(time.total_seconds()) / 3600 * 8000


@api_view(['GET', 'POST'])
def useVoucher(request):
    user_name = request.data["username"]
    award = Award.objects.get(name_Award=request.data['name_Award'])
    user = User.objects.get(username=user_name)
    user.status = not(user.status)
    promoCost = award.value
    user.cost = user.cost - user.cost * promoCost
    user.pointReward = user.pointReward - award.point
    user.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)


@api_view(['GET', 'POST'])
def LouerTransport(request):
    user_name = request.data["username"]
    transport = request.data["transport"]
    station = request.data["selectedStation"]
    user = User.objects.get(username=user_name)
    user.status = not(user.status)
    user.transportLouer = transport
    user.stationDepart = station
    user.tempsDepart = getDateTimeNow()
    user.isGiveBack = ''
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
def RevenirTransport(request):
    user_name = request.data["username"]
    stationArrive = request.data["stationArrive"]
    user = User.objects.get(username=user_name)
    rent_detail = Rent_Detail.objects.create(user=user,
                                             stationDepart=user.stationDepart,
                                             stationArrive=stationArrive,
                                             cost=CalculateMoney(user.tempsDepart,
                                                                 getDateTimeNow()),
                                             timeDepart=user.tempsDepart,
                                             timeArrive=getDateTimeNow())
    rent_detail.save()
    cost = rent_detail.cost
    transport = user.transportLouer
    if (transport[0] == 'B'):
        bike = Bike.objects.get(ID_Bike=transport)
        bike.Available = True
        bike.Belong_Station = Station.objects.get(name_Station=stationArrive)
        bike.save()
    else:
        if (transport[0:2] == 'EB'):
            ebike = ElecBike.objects.get(ID_EBike=transport)
            ebike.Available = True
            ebike.Belong_Station = Station.objects.get(
                name_Station=stationArrive)
            ebike.save()
        else:
            emoto = ElecMoto.objects.get(ID_EMoto=transport)
            emoto.Available = True
            emoto.Belong_Station = Station.objects.get(
                name_Station=stationArrive)
            emoto.save()
    user.transportLouer = ''
    user.stationDepart = ''
    user.tempsDepart = ''
    user.isGiveBack = 'Y'
    user.cost = cost
    user.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)


@api_view(['GET', 'POST'])
def PayerTransport(request):
    user_name = request.data["username"]
    user = User.objects.get(username=user_name)
    user.status = not(user.status)
    user.isGiveBack = ''
    user.cost = 0
    user.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)
