from django.contrib.auth.decorators import login_required
from django.http import HttpRequest
from django.shortcuts import render, Http404
from django.views import View


def admin_page(request: HttpRequest):
    return render(request, 'admin/index.html')


def header_references_partial(request):
    return render(request, 'admin/main-page-partial/head-references.html')


def footer_references_partial(request):
    return render(request, 'admin/main-page-partial/footer-references.html')
