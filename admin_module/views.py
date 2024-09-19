from django.shortcuts import render


def redirect_to_layout(request):
    return render(request, '_layout.html')
