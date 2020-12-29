import {IUser} from './../interfaces/user.interface';

export class User implements IUser {
  constructor(public name: string, public surrname: string, public number: number) {}
}
