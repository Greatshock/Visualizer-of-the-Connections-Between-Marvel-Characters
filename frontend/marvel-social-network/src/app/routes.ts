import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'network-graph',
    component: NetworkGraphComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
