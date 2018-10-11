from django.http import HttpResponse,  HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from .models import User
#  question = get_object_or_404(Question, pk=question_id)
# return render(request, 'Park/detail.html', {'question': question})

class PostsForm(ModelForm):
    class Meta:
        model = blog_posts
        fields = ['first_name', 'last_name', 'points', 'car', 'license_plate']

def post_create(request):
    form = PostsForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponse("Hello, world. You're at the polls index.")
    return HttpResponse({'form': form})