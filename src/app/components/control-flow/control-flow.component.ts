import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  div1Visible = false;
  div2Visible = true;
  dayName = "";
  cities: string[]=[
    "hyderabad",
    "mumbai",
    "pune",
    "chennai",
    "delhi",
    "kolkata",
    "bengaluru"
  ]

  employee: any[] = [
    { empId: 101, name: "Jai",age: 23,address: "Vizag"},
    { empId: 102, name: "Sai",age: 27,address: "Hyderabad"},
    { empId: 103, name: "Santosh",age: 32,address: "Guntur"},
    { empId: 104, name: "Satish",age: 40,address: "Vijayawada"},
    { empId: 105, name: "Shyam",age: 21,address: "Nellore"},
    { empId: 106, name: "Rahul",age: 25,address: "Vizag"},
    { empId: 107, name: "Ravi",age: 22,address: "Hyderabad"},
    { empId: 108, name: "Raj",age: 32,address: "Guntur"},
    { empId: 109, name: "Rajesh",age: 40,address: "Vijayawada"},
  ];
  constructor() { }

  toggleDiv1() {
    this.div1Visible = !this.div1Visible;
  }
}
