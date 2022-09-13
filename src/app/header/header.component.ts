import { TaskService } from 'src/app/task.service';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('openTaskCreator') openTaskCreator = new EventEmitter<void>(false);
  @Output('deleteAll') deleteAll = new EventEmitter<void>(false);

  bsModaRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private taskService: TaskService
  ) {}

  onCreateNew() {
    this.bsModaRef = this.modalService.show(TaskCreatorComponent);
  }
  onDeleteAll() {
    this.taskService.deleteAll();
  }
}
