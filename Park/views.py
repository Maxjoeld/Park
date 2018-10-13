from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from rest_framework.generics import (
  ListAPIView,
  CreateAPIView,
  RetrieveAPIView,
  DestroyAPIView,
  UpdateAPIView,
)

from .models import User
from .serializers import UserSerializer


class UserListView(ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class UserDetailView(RetrieveAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class UserCreateView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class UserUpdateView(UpdateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class UserDeleteView(DestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

