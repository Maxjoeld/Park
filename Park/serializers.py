from rest_framework import serializers

from  Park.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('first_name', 'last_name','points', 'car', 'license_plate', 'pub_date')