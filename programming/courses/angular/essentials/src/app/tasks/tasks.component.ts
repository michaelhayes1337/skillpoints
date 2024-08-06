import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { UserData } from '../user/user.model';
import { TaskData } from '../task/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTaskData } from '../new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: UserData;
  isAddingTasks = false;
  constructor(private taskService: TaskService) {}

  get assignedTasks() {
    return this.taskService.getAssignedTasks(this.user.id);
  }
  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }
  onStartAddTask() {
    this.isAddingTasks = true;
  }
  onCancelAddTask() {
    this.isAddingTasks = false;
  }
  onSubmitTask(task: NewTaskData) {
    this.taskService.addTask(task, this.user.id);
    this.isAddingTasks = false;
  }
}
