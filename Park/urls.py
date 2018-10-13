# from django.urls import path
# from django.conf import settings
from rest_framework.routers import DefaultRouter

from Park.views import UserViewSet

router = DefaultRouter()
router.register(r'', UserViewSet)
urlpatterns = router.urls


# urlpatterns = [
#   path('', views.UserListView.as_view(),),
#   path('<pk>', views.UserDetailView.as_view()),
#   path('create/', views.UserCreateView.as_view()),
#   path('<pk>/update/', views.UserUpdateView.as_view()),
#   path('<pk>/delete/', views.UserDeleteView.as_view()),
# ]