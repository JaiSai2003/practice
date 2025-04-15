import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  Div1BgColor:string= 'green';
  isChecked: boolean = false;
  div3ClassName: string = 'bg-success';
  toggleDiv1BgColor(arg: string) {
    this.Div1BgColor = arg;
  }

}
