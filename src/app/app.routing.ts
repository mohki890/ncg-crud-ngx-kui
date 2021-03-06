
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }]
}];