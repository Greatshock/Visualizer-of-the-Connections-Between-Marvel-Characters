import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelpComponent } from './help/help.component';

import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'network-graph',
    component: NetworkGraphComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
