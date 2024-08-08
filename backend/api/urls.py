from django.urls import path
from .views import TaskList , CompletedTaskList

urlpatterns = [
    path('tasks/', TaskList.as_view(), name='task_list'),  
    path('tasks/<int:pk>/', TaskList.as_view(), name='task_detail'), 
    path('completedtasks/', CompletedTaskList.as_view(), name='Completed_tasks'), 

]
