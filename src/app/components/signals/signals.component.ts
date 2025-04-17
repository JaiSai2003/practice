import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  firstName = signal('Jai');

  lastname = signal<string>('Sai');

  appName: string = 'Angular';

  number = signal<number>(0);

  constructor() { 
    // const value = this.firstName();
    setTimeout(()=>{
      debugger;
      this.appName = "Laravel";
      // this.firstName.set('Sai');
      debugger;
    }, 10000)
  }
  
  increment(){
    this.number.update(val => val + 1);
  }

  decrement(){
    this.number.update(val => val - 1);
  }
}
