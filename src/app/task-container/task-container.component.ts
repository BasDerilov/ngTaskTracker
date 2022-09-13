import { TaskService } from './../task.service';
import { Component } from '@angular/core';
import { TaskCreatorComponent } from '../header/task-creator/task-creator.component';
import { Task } from './task/task';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  constructor(private taskService: TaskService) {}

  tasks = this.taskService.getTasks;
}
