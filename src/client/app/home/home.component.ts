import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { SpinnerService } from '../services/spinner.service';
import { AppSettings } from '../shared/config/app.setting';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  constructor(private router: Router,
  public spinnerService: SpinnerService,
  ) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {}

  logout() {
    firebase.auth().signOut().then(function () {
    }, function (error) {
      console.log(error.message);
    });
    this.router.navigate(['/login']);
  }
}
