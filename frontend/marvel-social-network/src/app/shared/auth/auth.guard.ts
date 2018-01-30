import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate() {
    console.log(this.afAuth.authState);
    if (this.afAuth.authState) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
