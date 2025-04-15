import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle,FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  div1Color: string = 'green';
  isChecked: boolean = false;
  Styles: any = {
    'background-color': 'red',
    'color': 'white',
    'height': '100px',
    'width': '100px'
  };
  addDiv1Color(arg: string) {
    this.div1Color = arg;
  }

}
