import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1: boolean = true;
  div2: boolean = false;
  val1: string = 'a';
  val2: string = '';
  toggleDiv1(value: boolean){
    this.div1 = value;
  }
}
