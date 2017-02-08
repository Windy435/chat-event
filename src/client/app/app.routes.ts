import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { ChatRoutes } from './chat/index';
import { AuthenticationRoutes } from './authentication/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ChatRoutes,
  ...AuthenticationRoutes
];
