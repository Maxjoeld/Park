from django.urls import path
from django.conf import settings

from . import views
#Add app name to differentiate between different apps that might be added
app_name='Park'
urlpatterns = [
  path('', views.user_create, name='index'),
]