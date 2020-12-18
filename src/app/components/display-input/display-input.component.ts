import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.scss'],
})
export class DisplayInputComponent implements OnInit {

  @Input() title1: string;
  @Input() title2: string;

  constructor() { }

  ngOnInit() {}

  copyInputDisplay(){
    alert("hola");
  }

}
