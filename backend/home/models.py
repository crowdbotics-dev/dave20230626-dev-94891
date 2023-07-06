from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    type = models.CharField(max_length=200,)
    image_url = models.CharField(max_length=200,)
    attributes = models.TextField()
    is_favorite = models.BooleanField(default="False",)
    description = models.TextField()
    date_adopted = models.DateTimeField(auto_now=True,)
