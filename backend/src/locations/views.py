import sys
import json
from datetime import datetime
from math import sin, asin, cos, sqrt, radians
from django.core import serializers
from django.http import JsonResponse
from rest_framework.decorators import api_view
from locations.api.serializers import UserSerializer
from .models import Station, User, Bike, ElecBike, ElecMoto, Rent_Detail, Award

# Create your views here.

def Haversine(lat1, long1, lat2, long2):
    R = 6372.8
    dLat = radians(lat2 - lat1)
    dLong = radians(long2 - long1)
    lat1 = radians(lat1)
    lat2 = radians(lat2)
    a = sin(dLat/2)**2 + cos(lat1) * cos(lat2) * sin(dLong/2)**2
    c = 2 * asin(sqrt(a))
    return R * c

def TrouverPosition(request):
    longitude = float(request.GET.get('longitude', ''))
    latitude = float(request.GET.get('latitude', ''))
    serializers_stations = serializers.serialize('json', Station.objects.all())
    listStation = json.loads(serializers_stations)
    Min = sys.maxsize
    for station in listStation:
        tempLat = station['fields']['latitude']
        tempLong = station['fields']['longitude']
        temp = Haversine(latitude, longitude, tempLat, tempLong)
        if(temp < Min):
            Min = temp
            result = station
    result1 = {'result': result['fields'], 'distance': round(Min, 3)}
    return JsonResponse(result1)


def getDateTimeNow():
    now = datetime.now()
    return now.strftime("%d/%m/%Y %H:%M:%S")

def CalculateMoney(timeDepart, timeArrive, transport):
    time = datetime.strptime(timeArrive,
                             "%d/%m/%Y %H:%M:%S") - datetime.strptime(timeDepart,
                                                                      "%d/%m/%Y %H:%M:%S")
    if (transport[0] == 'B'):
        if (int(time.total_seconds()) < 3600):
            return 10000 + int(time.total_seconds()) / 3600 * 10000
        else:
            return 8000 + int(time.total_seconds()) / 3600 * 8000
    if (transport[0:2] == 'EB'):
        if (int(time.total_seconds()) < 3600):
            return 15000 + int(time.total_seconds()) / 3600 * 15000
        else:
            return 12000 + int(time.total_seconds()) / 3600 * 12000
    if (transport[0:2] == 'EM'):
        if (int(time.total_seconds()) < 3600):
            return 20000 + int(time.total_seconds()) / 3600 * 20000
        else:
            return 18000 + int(time.total_seconds()) / 3600 * 18000


@api_view(['GET', 'POST'])
def useVoucher(request):
    user_name = request.data["username"]
    reward = request.data['name_Award']
    user = User.objects.get(username=user_name)
    if (reward != ''):
        award = Award.objects.get(name_Award=reward)
        promoCost = award.value
        user.tempCost = user.cost - user.cost * promoCost
        user.tempPoint = user.pointReward - award.point
    else:
        user.tempCost = user.cost
        user.tempPoint = user.pointReward
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
                                                                 getDateTimeNow(),
                                                                 user.transportLouer),
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
    isUseVoucher = request.data["isUseVoucher"]
    user = User.objects.get(username=user_name)
    rent_detail = Rent_Detail.objects.latest('id')
    if (isUseVoucher):
        user.pointReward = user.tempPoint
        user.money -= user.tempCost
        rent_detail.cost = user.tempCost
    else:
        user.money -= user.cost
        rent_detail.cost = user.cost
    rent_detail.save()
    user.status = not(user.status)
    user.pointReward += 5
    user.isGiveBack = ''
    user.cost = 0
    user.tempCost = 0
    user.tempPoint = 0
    user.save()
    users = UserSerializer(user)
    return JsonResponse(users.data)
