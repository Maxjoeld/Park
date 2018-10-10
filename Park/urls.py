from django.urls import path
from django.conf import settings

from . import views
#Add app name to differentiate between different apps that might be added
app_name='Park'
urlpatterns = [
  path('', views.IndexView.as_view(), name='index'),
  path('<int:pk>/', views.DetailView.as_view(), name='detail'),
  path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
  path('<int:question_id>/vote/', views.vote, name='vote'),
]