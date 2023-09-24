from django.shortcuts import render
from .models import *


def product_home(request):
    products_images = ProductImage.objects.filter(is_active=True, is_main=True)

    session_key = request.session.session_key
    if not session_key:
        request.session.cycle_key()

    print(request.session.session_key)

    return render(request, 'product/product_home.html', locals())
