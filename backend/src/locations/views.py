import sys
import json
from django.core import serializers
from django.http import JsonResponse
from geopy.distance import geodesic
from .models import Station

# Create your views here.
def TrouverPosition(request):
    longitude = request.GET.get('longitude', '')
    latitude = request.GET.get('latitude', '')
    position_Now = (latitude, longitude)
    serializers_stations = serializers.serialize('json', Station.objects.all())
    listStation = json.loads(serializers_stations)
    Min = sys.maxsize
    for station in listStation:
        position_Station = (station['fields']['latitude'], station['fields']['longitude'])
        temp = geodesic(position_Now, position_Station).km
        if(temp < Min):
            Min = temp
            result = station
    result1 = {'result': result['fields'], 'distance': Min}
    return JsonResponse(result1)
