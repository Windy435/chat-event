import { Route } from '@angular/router';
import { AuthenticationComponent } from './index';

export const AuthenticationRoutes: Route[] = [
  {
    path: 'login',
    component: AuthenticationComponent
  }
];
