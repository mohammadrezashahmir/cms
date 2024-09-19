from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    def get_paginated_response(self, data):
        return Response({
            'page_obj': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link(),
                'last':self.page.paginator.num_pages,
                'current':self.page.number,
            },
            'results': data
        })
