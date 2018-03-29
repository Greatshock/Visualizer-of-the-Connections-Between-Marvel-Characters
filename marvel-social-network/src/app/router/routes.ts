import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { NetworkGraphComponent } from '../network-graph/network-graph.component';
import { StatsComponent } from '../stats/stats.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HelpComponent } from '../help/help.component';

import { AuthGuard } from '../shared/guards';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'network-graph',
    component: NetworkGraphComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '', redirectTo: 'network-graph', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
