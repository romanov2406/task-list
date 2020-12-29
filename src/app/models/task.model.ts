import { Itask } from './../interfaces/task.interface';

export class Task implements Itask {
    constructor(
        public name: string,
        public status: boolean = false,
        public lernStatus: string = 'In Proccces'
    ) { }
}