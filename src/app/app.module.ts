import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard.service';
import { DownloadService } from './dashboard/downloads/download.service';

import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './dashboard/home/home.component';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar/sidebar.directive';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { DownloadsComponent } from './dashboard/downloads/downloads.component';
import { PesquisasComponent } from './dashboard/pesquisas/pesquisas.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: () => { return localStorage.getItem('token'); }
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HomeComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    DownloadsComponent,
    PesquisasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    AuthGuard,
    DownloadService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
