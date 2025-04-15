import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directives/directive/directive.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component: AdminComponent},
    {path: 'dataBinding' , component: DataBindingComponent},
    {path: 'directives' , component: DirectiveComponent},
    {path: 'controlFlow' , component: ControlFlowComponent}
];
