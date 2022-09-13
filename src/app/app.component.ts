import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-tracker';

  constructor() {}

  deleteAllTasks() {
    console.log('DELETE ALL TASKS');
  }
}
