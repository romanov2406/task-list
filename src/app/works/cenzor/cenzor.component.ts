import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  words: string = '';
  area: string = '';
  wordsCollection: string[] = [];
  wordsFRomArea: string[] = [];
  isRed:boolean;
  constructor() { }

  ngOnInit(): void { }

  addWords(): void {
    if (this.words) {
      this.wordsCollection.push(this.words);
      this.words = '';
      this.isRed = false;
    } else {
      alert('Ви нічого не ввели');
      this.isRed = true
    }
  }
  reset(): void {
    this.words = '';
    this.area = '';
    this.wordsCollection = [];
  }
  cenzor(): void {
    if (this.area) {
      let arr = this.area.split(/\b/);
      let censored = arr.map(word => this.wordsCollection.includes(word) ? '*'.repeat(word.length) : word);
      this.area = censored.join('');
      console.log(this.area);
      
    } else {
      alert('Ви нічого не ввели')
    }
  }

}
