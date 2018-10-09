from django.urls import path
from django.conf import settings

from . import views

urlpatterns = [
  path('<question_id>', views.detail),
  path('<int:question_id>/', views.detail, name='detail'),
  # ex: /polls/5/results/
  path('<int:question_id>/results/', views.results, name='results'),
  # ex: /polls/5/vote/
  path('<question_id>/vote/', views.vote, name='vote'),
]