import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decimal-keypad',
  templateUrl: './decimal-keypad.component.html',
  styleUrls: ['./decimal-keypad.component.scss'],
})
export class DecimalKeypadComponent implements OnInit {

  @Output() onKeyClick = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  handleButtonClick(value: string){
    this.onKeyClick.emit(value);
  }
}
