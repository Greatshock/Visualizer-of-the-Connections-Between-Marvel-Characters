import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
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

  signInWithGoogle() {
    // this.authService.signInWithGoogle()
      // .then((res) => {
        this.router.navigate(['network-graph']);
      // })
      // .catch((err) => console.log(err));
  }

}
