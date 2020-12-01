from django.contrib import admin

from .models import Location
from .models import User
from .models import Rent_Detail
from .models import Station
from .models import ElecBike
from .models import Bike
from .models import ElecMoto


admin.site.register(Location)
admin.site.register(User)
admin.site.register(Rent_Detail)
admin.site.register(Station)
admin.site.register(ElecBike)
admin.site.register(Bike)
admin.site.register(ElecMoto)
