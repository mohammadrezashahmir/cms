from django import template

register = template.Library()


@register.simple_tag
def page_range(current_page, total_pages, delta=2):
    start_page = max(current_page - delta, 1)
    end_page = min(current_page + delta + 1, total_pages + 1)
    return range(start_page, end_page)

