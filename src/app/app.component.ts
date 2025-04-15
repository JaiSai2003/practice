import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DirectiveComponent } from './components/directives/directive/directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,DirectiveComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-directive></app-directive>
    <router-outlet />
  `,
  // templateUrl: './app.component.html',
  // styles: []
})
export class AppComponent {
  constructor(private router: Router ) {}
  navigateToHome() {
    this.router.navigate(['/home']); 
    // this.router.navigateByUrl('/home');
  }
  title = 'practice';
}
