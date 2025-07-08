import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Account } from './pages/account/account';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'account', component: Account }
];
