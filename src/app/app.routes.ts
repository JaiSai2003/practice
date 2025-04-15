import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directives/directive/directive.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component: AdminComponent},
    {path: 'dataBinding' , component: DataBindingComponent},
    {path: 'directives' , component: DirectiveComponent}

];
