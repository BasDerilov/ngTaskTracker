import { TaskService } from 'src/app/task.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {
    title: 'Hello',
    taskContent: 'temp',
    importance: '',
    hash: '0',
    completed: false,
    creationDate: new Date(),
  };

  constructor(private taskService: TaskService) {}

  onDeleteSelf() {
    this.taskService.deleteTask(this.task);
  }

  onComplete() {
    this.task.completed = true;
  }

  onUndo() {
    this.task.completed = false;
  }
}
