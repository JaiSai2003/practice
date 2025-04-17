import {  Component, computed, effect, signal, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signals',
  imports: [FormsModule, CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  firstName = signal('Jai');

  lastname = signal<string>('Sai');

  appName: string = 'Angular';

  number = signal<number>(0);




  
  quantity = signal<number>(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);


  selectedVehicle = signal<Vehicle>({ id: 1, name: 'AT-AT', price: 10000 });

  vehicles = signal<Vehicle[]>([]);

  exPrice = computed(() => this.selectedVehicle().price * this.quantity());
  color = computed(() => this.exPrice() > 50000 ? 'green' : 'blue');


  // Example of a declarative effect
  qtyEff = effect(() => console.log("Latest quantity:", this.quantity()));

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);

  }


  constructor() { 
    // const value = this.firstName();
    setTimeout(()=>{
      debugger;
      this.appName = "Laravel";
      // this.firstName.set('Sai');
      debugger;
    }, 10000)





    console.log(this.quantity());

    // Two for one sale
    this.quantity.update((qty) => qty * 2);
    // Interstellar price increase
    this.selectedVehicle.update(v => ({
      ...v,
      price: v.price + (v.price * 0.2)
    }));

    // Add selected vehicle to array
    this.vehicles.update(v => [...v, this.selectedVehicle()]);

    // Example of an effect
    effect(() => console.log(JSON.stringify(this.vehicles())));
  }
  
  increment(){
    this.number.update(val => val + 1);
  }

  decrement(){
    this.number.update(val => val - 1);
  }



}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
