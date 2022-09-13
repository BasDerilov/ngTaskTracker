import { Task } from './task-container/task/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _taskArr: Task[] = [
    {
      title: 'Wash the cat',
      taskContent: 'Remember to use cat shampoo',
      importance: 'medium',
      hash: '12ed2d',
      creationDate: new Date(),
      completed: false,
    },
    {
      title: 'Do loundry',
      taskContent: 'Seperate colorful from white clothing',
      importance: 'low',
      hash: '12fadewfd',
      creationDate: new Date(),
      completed: false,
    },
    {
      title: 'Beat the cat',
      taskContent:
        'Give the cat his daily dose of power beating to demonstrate superiority',
      importance: 'high',
      hash: 'ab2345',
      creationDate: new Date(),
      completed: false,
    },
  ];

  constructor() {}

  public get getTasks(): Task[] {
    return this._taskArr;
  }

  public addTask(task: Task) {
    this._taskArr.push(task);
  }

  public deleteTask(task: Task) {
    this._taskArr.splice(this._taskArr.indexOf(task));
  }

  public deleteAll() {
    while (this._taskArr.length > 0) {
      this._taskArr.pop();
    }
  }
}
