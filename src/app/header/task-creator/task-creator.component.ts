import { Task } from '../../task-container/task/task';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-creator',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
})
export class TaskCreatorComponent {
  @Output('sendTaskData') sendData = new EventEmitter<Task>(false);

  task: Task = {
    title: '',
    taskContent: '',
    importance: '',
    hash: '',
    completed: false,
    creationDate: new Date(),
  };

  constructor(
    private modalService: BsModalService,
    private taskService: TaskService
  ) {}

  HideTaskCreator() {
    this.modalService.hide();
  }

  generateHashCode(string = JSON.stringify(this.task)) {
    let hash = 0;

    for (let i = 0; i < string.length; i++) {
      const code = string.charCodeAt(i);
      hash = (hash << 5) - hash + code;
      hash = hash & hash;
    }
    this.task.hash = Math.abs(hash).toString(16);
  }

  CreateNewTask(title: string, taskContent: string, importance: string) {
    if ([title, taskContent, importance].includes('')) {
      alert('All fields are required');
    } else {
      this.task = {
        title: title,
        taskContent: taskContent,
        importance: importance,
        hash: '',
        completed: false,
        creationDate: new Date(),
      };

      this.generateHashCode();

      this.taskService.addTask(this.task);

      console.log(this.task);

      this.task = {
        title: '',
        taskContent: '',
        importance: '',
        hash: '',
        completed: false,
        creationDate: new Date(),
      };

      this.HideTaskCreator();
    }
  }
}
