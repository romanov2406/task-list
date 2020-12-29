import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/task.interface';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  arr: Array<Itask> = [];
  isRed: boolean = false;
  parentText: string = '';
  constructor() { }

  ngOnInit(): void { }

  addTask(): void {
    if (this.parentText) {
      const TASK = new Task(this.parentText)
      this.arr.push(TASK);
      this.parentText = '';
      this.isRed = false;
    } else {
      alert('Заповніть поле');
      this.isRed = true;
    }
  }

}
