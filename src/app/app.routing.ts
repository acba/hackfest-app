import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { PesquisasComponent } from './dashboard/pesquisas/pesquisas.component';
import { DownloadsComponent } from './dashboard/downloads/downloads.component';

import { AuthGuard } from './auth/authguard.service';
import { tokenNotExpired } from 'angular2-jwt';


export const ROUTES: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: tokenNotExpired('token') ? 'dashboard' : 'login' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }, canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: HomeComponent, data: { title: 'Home' }},
      { path: 'downloads', component: DownloadsComponent, data: { title: 'Downloads' }},
      { path: 'pesquisas', component: PesquisasComponent, data: { title: 'Pesquisas' }},
    ]
  },
];
