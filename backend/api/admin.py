from django.contrib import admin
from .models import Tasks, CompletedTasks

admin.site.register(Tasks)
admin.site.register(CompletedTasks)