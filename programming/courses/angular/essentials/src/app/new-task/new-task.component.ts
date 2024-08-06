import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();
  @Output() submitTask = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelTask() {
    this.cancelTask.emit();
  }
  onSubmitTask() {
    const taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.submitTask.emit(taskData);
  }
}
