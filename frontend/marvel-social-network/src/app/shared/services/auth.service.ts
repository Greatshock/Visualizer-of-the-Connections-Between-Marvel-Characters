import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthService {

  private user: any;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {

    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  public isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => {
      this.router.navigate(['login']);
    });
  }

}
