import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  Day = new Date().getDay();
  constructor() { 
    console.log(this.Day);
  }
  
}
