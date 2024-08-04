from django.shortcuts import render


def main_page(request):
    return render(request, 'home/main_page.html', context={
    })
