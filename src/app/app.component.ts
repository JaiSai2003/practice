import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  // template: `
  //   <h1>{{ title }}</h1>
  //   <router-outlet />
  // `,
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private router: Router ) {}
  navigateToHome() {
    this.router.navigate(['/home']); 
    // this.router.navigateByUrl('/home');
  }
  title = 'practice';
}
