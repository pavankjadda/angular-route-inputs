import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee-list/employee-list.component').then((m) => m.employeeRoutes),
  },
];
