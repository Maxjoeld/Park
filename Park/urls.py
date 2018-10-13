from django.urls import path
from django.conf import settings

from . import views
#Add app name to differentiate between different apps that might be added
app_name='Park'
urlpatterns = [
  path('', views.UserListView.as_view(),),
  path('<pk>', views.UserDetailView.as_view()),
  path('create/', views.UserCreateView.as_view()),
  path('<pk>/update/', views.UserUpdateView.as_view()),
  path('<pk>/delete/', views.UserDeleteView.as_view()),
]