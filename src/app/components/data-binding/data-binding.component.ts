import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = 'Jai';
  rollNo: number = 10;
  isActive: boolean = true;
  currentDate: Date = new Date();
  placeholder: string = 'Enter your name';
  class: string = 'bg-primary';
  selectedValue: string = "";
  constructor(){
    
  }
  callEvent(event: string){
    console.log( event+' Event called');
  }
}
