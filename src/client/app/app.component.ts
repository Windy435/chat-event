import { Component } from '@angular/core';
import { Config } from './shared/index';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import './operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor(public router: Router) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCk_qb90nhs3QTbp96AqSKFe6VnGTJ9P5w',
      authDomain: 'chat-event.firebaseapp.com',
      databaseURL: 'https://chat-event.firebaseio.com',
      storageBucket: 'chat-event.appspot.com'
    };
    firebase.initializeApp(firebaseConfig);

    console.log('Environment config', Config);
  }
}
