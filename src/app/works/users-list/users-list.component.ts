import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from './../../interfaces/user.interface';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  users: Array<IUser> = [];
  name: string;
  surrname: string;
  number: number;
  isHide: boolean;
  modalRef: BsModalRef;
  temp: any;
  mes: number;
  searchField: string;
  constructor() { }

  ngOnInit(): void { }


  formReset(): void {
    this.name = '';
    this.surrname = '';
    this.number = null;
    this.searchField = ''
  }
  createUser(): void {
    if (this.name && this.surrname && this.number) {
      let USER = new User(this.name, this.surrname, this.number);
      this.users.push(USER);
      console.log(this.users);
      this.formReset();
    }else{
      alert('Заповніть вся поля')
    }
  }
  saveUser(): void {
    let USER = new User(this.name, this.surrname, this.number);
    this.users.splice(this.mes, 1, USER);
    this.isHide = false;
    this.formReset();
  }
  messChild(message): void {
    this.name = this.users[message].name;
    this.surrname = this.users[message].surrname;
    this.number = this.users[message].number;
    this.isHide = true;
  }
  messChildDel(message): void {
    this.users.splice(message, 1)
  }

}
