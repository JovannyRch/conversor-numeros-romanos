import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  value1: string = "";
  value2: string = "";
  constructor() {}

  handleKeyClick(value: string){
    this.value1 = value + this.value1;
  }
}
