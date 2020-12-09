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
class EBikeAdmin(admin.ModelAdmin):
    list_display = ['ID_EBike', 'Belong_Station']
admin.site.register(ElecBike, EBikeAdmin)

from .models import Bike
class BikeAdmin(admin.ModelAdmin):
    list_display = ['ID_Bike', 'Belong_Station']
admin.site.register(Bike, BikeAdmin)

from .models import ElecMoto
class EMotoAdmin(admin.ModelAdmin):
    list_display = ['ID_EMoto', 'Belong_Station']
admin.site.register(ElecMoto, EMotoAdmin)








