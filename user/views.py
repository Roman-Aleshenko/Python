from django.shortcuts import render


def user_home(request):
    return render(request, 'user/user_home.html')
