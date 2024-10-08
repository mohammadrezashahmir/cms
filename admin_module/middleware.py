from django.http import Http404


class be_admin_required:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/admin/') and not (request.user.is_authenticated and request.user.is_superuser):
            raise Http404()
        response = self.get_response(request)
        return response
