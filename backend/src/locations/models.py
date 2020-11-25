from django.db import models

# Create your models here.


class Location(models.Model):
    name = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)
    latitude = models.CharField(max_length=120)

    def __str__(self):
        return self.name
