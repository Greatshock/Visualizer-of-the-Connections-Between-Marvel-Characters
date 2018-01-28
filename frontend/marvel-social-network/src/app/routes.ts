import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SocialNetworkComponent } from './social-network/social-network.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'social-network',
    component: SocialNetworkComponent
  }
];
