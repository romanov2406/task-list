import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @Input() users: Array<IUser> = [];
  @Input() searchField: string;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void { }
  user = 'Ivan'
  editUser(index:number):void{
  this.edit.emit(index);
  }
  deleteUser(index:number):void{
  this.delete.emit(index);
  }

}
