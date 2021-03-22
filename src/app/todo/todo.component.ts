import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public tasks: any[];

  constructor() {
    this.tasks = [];
  }

  public addTask(task: string): void {
    if (task === '') {
      return;
    }
    this.tasks.push({
      text: task,
      done: false
    });
  }

  public removeTask(task: any): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public toggle(task: any): void {
    task.done = !task.done;
  }
}
