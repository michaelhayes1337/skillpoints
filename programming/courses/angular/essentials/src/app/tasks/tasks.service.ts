import { Injectable } from '@angular/core';
import { NewTaskData } from '../new-task/new-task.model';
import { TaskData } from '../task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: TaskData[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getAssignedTasks(userId: string) {
    return this.tasks.filter((x: TaskData) => x.userId === userId);
  }

  private convertTaskIdToInt(input: string) {
    const digits = input.slice(1);
    return Number.parseInt(digits);
  }

  private getLargestTaskId() {
    let max =
      this.tasks.length > 0 ? this.convertTaskIdToInt(this.tasks[0].id) : 0;
    this.tasks.forEach((x) => {
      const currentIdAsInt = this.convertTaskIdToInt(x.id);
      if (currentIdAsInt > max) max = currentIdAsInt;
    });
    return max;
  }

  addTask(task: NewTaskData, userId: string) {
    let largest = this.getLargestTaskId();
    const newTask: TaskData = {
      id: `t${largest + 1}`,
      userId,
      ...task,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((x) => x.id !== taskId);
    this.saveTasks();
  }
}
