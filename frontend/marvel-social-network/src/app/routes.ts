import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HelpComponent } from './help/help.component';

import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'network-graph',
    component: NetworkGraphComponent,
    canActivate: [AuthGuard]
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
    loadChildren: './not-found/not-found.component.ts'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
