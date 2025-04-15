import { Component } from '@angular/core';
import { NgIfComponent } from '../ng-if/ng-if.component';
import { NgforComponent } from '../ngfor/ngfor.component';
import { NgStyleComponent } from '../ng-style/ng-style.component';
import { NgClassComponent } from '../ng-class/ng-class.component';

@Component({
  selector: 'app-directive',
  imports: [NgIfComponent, NgforComponent, NgStyleComponent,NgClassComponent],
  template: `
  <div class="row table table-bordered">
    <h1> Structural Directives</h1>
    <div class="col-6">
      <app-ng-if></app-ng-if>
    </div>
    <div class="col-6">
      <app-ngfor></app-ngfor>
    </div>
  </div>
  <div class="row table table-bordered">
    <h1> Attribute Directives</h1>
    <div class="col-6">
      <app-ng-class></app-ng-class>
    </div>
    <div class="col-6">
      <app-ng-style></app-ng-style>
    </div>
  </div>`,
  styles: ''
})
export class DirectiveComponent {

}
