from django.db import models

class Tasks(models.Model):  
    task_name = models.CharField(max_length=50)

    def __str__(self):
        return self.task_name

class CompletedTasks(models.Model):  
    task_name = models.CharField(max_length=50)

    def __str__(self):
        return self.task_name
