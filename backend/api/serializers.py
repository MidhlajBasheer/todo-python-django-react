from rest_framework import serializers
from .models import Tasks, CompletedTasks

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = '__all__'

class CompletedTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedTasks
        fields = '__all__'
