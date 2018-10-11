from django.http import HttpResponse,  HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.forms import ModelForm
from .models import User
# django.views.generic.edit.CreateView


# class UserForm(ModelForm):
#     class Meta:
#         model = User
#         fields = ['first_name', 'last_name', 'points', 'car', 'license_plate']

def user_create(request):
  form = User(**request)
  form.save()
  return print("Created a valid user")
    # return JsonResponse({'form': form})