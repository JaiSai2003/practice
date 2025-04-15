import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  items: string[] = ["pen", "book", "pencil", "eraser"];

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

}
