import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GraphComponent } from './graph/graph.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
