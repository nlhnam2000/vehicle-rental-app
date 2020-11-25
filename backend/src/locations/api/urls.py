from rest_framework.routers import DefaultRouter
from locations.api.views import LocationViewSet


router = DefaultRouter()
router.register(r'', LocationViewSet, basename='locations')
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
