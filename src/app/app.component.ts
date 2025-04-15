import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { DirectiveComponent } from './components/directives/directive/directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DirectiveComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-directive></app-directive>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'practice';
}
