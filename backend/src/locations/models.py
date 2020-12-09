from django.db import models
import operator
# Create your models here.


class Location(models.Model):
    name = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)
    latitude = models.CharField(max_length=120)

    def __str__(self):
        return self.name


# class User(models.Model):
#     name_User = models.CharField(
#         max_length=120, unique=True, default="Votre nom", blank=False)
#     username = models.CharField(
#         max_length=120, unique=True, default="Votre username", blank=False)
#     # password = models.CharField(max_length=120)
#     pointReward = models.CharField(max_length=120, default="0")
#     history = models.TextField(max_length=500, default="")

#     def __str__(self):
#         return self.name_User

class User(models.Model):
    first_name = models.CharField(
        max_length=120, blank=False, default="Votre nom")
    last_name = models.CharField(
        max_length=120, blank=False, default="Votre prenom")
    username = models.CharField(
        max_length=120, blank=False, default="Votre username")
    email = models.EmailField(
        max_length=120, default="Votre email")
    cmnd = models.CharField(max_length=120,
                            blank=False, default="")
    money = models.IntegerField(default=0)
    history = models.TextField(max_length=500, default="")
    pointReward = models.IntegerField(default=0)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class Station(models.Model):
    name_Station = models.CharField(max_length=120)
    latitude = models.FloatField(max_length=120)
    longitude = models.FloatField(max_length=120)
    address = models.CharField(max_length=120, default="")

    def __str__(self):
        return self.name_Station


class ElecBike(models.Model):
    ID_EBike = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(Station, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.ID_EBike


class Bike(models.Model):
    ID_Bike = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(
        Station, on_delete=models.CASCADE, related_name='listBike')

    def __str__(self):
        return self.ID_Bike


class ElecMoto(models.Model):
    ID_EMoto = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(Station, on_delete=models.CASCADE)

    def __str__(self):
        return self.ID_EMoto


class Rent_Detail(models.Model):
    date = models.DateField(auto_now_add=True)
    timeDepart = models.TimeField()
    timeArrive = models.TimeField()
    stationDepart = models.ForeignKey(
        Station, related_name='rentdetail_stationArrive',
        on_delete=models.CASCADE)
    stationArrive = models.ForeignKey(
        Station, related_name='rentdetail_stationDepart',
        on_delete=models.CASCADE)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __date__(self):
        return self
