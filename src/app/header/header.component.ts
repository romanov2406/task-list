import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter  = 0
  constructor() { }

  ngOnInit(): void {
  }
  change():void{
    this.counter++
    console.log(this.counter);
    
  }

}
