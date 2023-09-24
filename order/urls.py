from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^$', views.order_home, name='order_home'),
    re_path(r'basket_adding/$', views.basket_adding, name='basket_adding'),
    re_path(r'checkout/$', views.checkout, name='checkout'),
]
