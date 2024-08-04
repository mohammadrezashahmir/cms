from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from cms import settings


def send_email(subject, to, context, template_name):
    try:
        message = render_to_string(template_name, context)
        plugin_message = strip_tags(message)
        from_email = settings.EMAIL_HOST_USER
        send_mail(subject, plugin_message, from_email, [to], message)
    except:
        raise ValidationError('عملیات ارسال ایمیل ناموفق بود')
