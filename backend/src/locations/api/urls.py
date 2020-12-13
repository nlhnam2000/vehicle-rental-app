from rest_framework import routers
from locations.api.views import LocationViewSet, StationViewSet, UserViewSet

router = routers.SimpleRouter()
router.register(r'locations', LocationViewSet)
router.register(r'stations', StationViewSet)
router.register(r'users', UserViewSet)
urlpatterns = router.urls
