import { Component, Input, OnInit } from '@angular/core';
import { Itask } from './../../../interfaces/task.interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  @Input() arr: Array<Itask>
  isRed: boolean;
  save: string;
  isShow: boolean;
  taskIndex: number;
  constructor() { }

  ngOnInit(): void { }

  // Method to delete object from array 
  deleteTask(index: number): void {
    this.arr.splice(index, 1);
  }
  // Method to edit some properties in array 
  editTask(index: number): void {
    this.save = this.arr[index].name
    this.taskIndex = index;
    this.isShow = true;
  }

  active(index: number): void {
    this.arr[index].status = !this.arr[index].status;
  }
  // Method to save properties in array 
  saveTask(): void {
    if (this.save) {
      this.arr[Number(this.taskIndex)].name = this.save;
      this.save = '';
      this.isShow = false;
      this.isRed = false;
    } else {
      alert('Заповніть всі поля');
      this.isRed = true;
    }
  }

}
