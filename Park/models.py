import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class User(models.Model):
  first_name = models.CharField(max_length=15)
  last_name = models.CharField(max_length=15)
  points = models.IntegerField(default=0)
  car = models.CharField(max_length=200)
  license_plate = models.CharField(max_length=10)
  pub_date = models.DateTimeField(default=timezone.now)

  def was_published_recently(self):
    now = timezone.now()
    return now - datetime.timedelta(days=1) <= self.pub_date <= now
      
  def __str__(self):
    return self.first_name
