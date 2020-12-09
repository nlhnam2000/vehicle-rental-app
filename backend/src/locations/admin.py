from django.contrib import admin

from .models import Location
admin.site.register(Location) 

from .models import User
admin.site.register(User)

from .models import Rent_Detail
admin.site.register(Rent_Detail)

from .models import Station
admin.site.register(Station)

from .models import ElecBike
admin.site.register(ElecBike)

from .models import Bike
class BikeAdmin(admin.ModelAdmin):
    list_display = ['ID_Bike', 'Belong_Station']
admin.site.register(Bike, BikeAdmin)

from .models import ElecMoto 
admin.site.register(ElecMoto)








