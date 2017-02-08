import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../shared/config/app.setting';
import * as firebase from 'firebase';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent {
  model: any = {};
  error: string = '';

  constructor(
    private router: Router
  ) {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        // user logged in
        localStorage.setItem('loggedUser', JSON.stringify(user));
        console.log('logged in');
        this.router.navigate(['/home']);
      } else {
        // user not logged in
        this.error = AppSettings.LOGIN_WRONG;

      }
    });
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.model.email, this.model.password)
      .then(function () {
        // Handle success here.
      }, function (error) {
        // Handle Errors here.
        console.log(error.message);
      });
  }

  logout() {
    firebase.auth().signOut().then(function () {
        // Handle success here.
    }, function (error) {
      console.log(error.message);
    });
  }
}
