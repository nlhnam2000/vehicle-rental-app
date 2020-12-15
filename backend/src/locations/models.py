from django.db import models

# Create your models here.


class Location(models.Model):
    name = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)
    latitude = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Station(models.Model):
    name_Station = models.CharField(max_length=120)
    latitude = models.FloatField(max_length=120)
    longitude = models.FloatField(max_length=120)
    address = models.CharField(max_length=120, default="")

    def __str__(self):
        return self.name_Station


class Award(models.Model):
    name_Award = models.CharField(max_length=120)
    value = models.FloatField()
    point = models.IntegerField()

    def __str__(self):
        return self.name_Award


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
    pointReward = models.IntegerField(default=0)
    status = models.BooleanField(default=False)
    transportLouer = models.CharField(max_length=120, default="")
    stationDepart = models.CharField(max_length=120, default="")
    stationArrive = models.CharField(max_length=120, default="")
    tempsDepart = models.CharField(max_length=120, default="")
    isGiveBack = models.CharField(max_length=120, default="")
    cost = models.IntegerField(default=0)
    rewardList = models.ManyToManyField(Award)

    def __str__(self):
        return self.username


class ElecBike(models.Model):
    ID_EBike = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(Station,
                                       on_delete=models.CASCADE, related_name='listElecBike')
    Available = models.BooleanField(default=True)

    def __str__(self):
        return self.ID_EBike


class Bike(models.Model):
    ID_Bike = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(Station,
                                       on_delete=models.CASCADE, related_name='listBike')
    Available = models.BooleanField(default=True)

    def __str__(self):
        return self.ID_Bike


class ElecMoto(models.Model):
    ID_EMoto = models.CharField(primary_key=True, max_length=120)
    Belong_Station = models.ForeignKey(Station,
                                       on_delete=models.CASCADE, related_name='listElecMoto')
    Available = models.BooleanField(default=True)

    def __str__(self):
        return self.ID_EMoto


class Rent_Detail(models.Model):
    timeDepart = models.CharField(max_length=120, default="")
    timeArrive = models.CharField(max_length=120, default="")
    stationDepart = models.CharField(max_length=120, default="")
    stationArrive = models.CharField(max_length=120, default="")
    cost = models.IntegerField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='history')
