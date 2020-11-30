from rest_framework import routers
from locations.api.views import LocationViewSet
from locations.api.views import StationViewSet

router = routers.SimpleRouter()
router.register(r'locations', LocationViewSet)
router.register(r'stations', StationViewSet)
urlpatterns = router.urls


# from django.urls import path

# from .views import (
#     LocationListView,
#     LocationDetailView,
#     LocationCreateView,
#     LocationUpdateView,
#     LocationDeleteView
# )

# urlpatterns = [
#     path('', LocationListView.as_view()),
#     path('create/', LocationCreateView.as_view()),
#     path('<pk>', LocationDetailView.as_view()),
#     path('<pk>/update/', LocationUpdateView.as_view()),
#     path('<pk>/delete/', LocationDeleteView.as_view())
# ]
