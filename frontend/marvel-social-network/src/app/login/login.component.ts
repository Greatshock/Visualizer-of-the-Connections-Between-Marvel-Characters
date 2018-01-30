import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.router.navigate(['/network-graph']);
  }

  loginWithFb() {
    this.authService.loginWithFacebook();
  }

}
