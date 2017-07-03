import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['dashboard']);
    }
  }

  onLoginSubmit(credentials) {
    credentials.login = credentials.login.replace(/[^0-9]/g, '');
    credentials.senha = credentials.senha.replace(/[^0-9]/g, '');

    this.auth.login(credentials)
      .map(res => res.json())
      .subscribe(
          response => this.auth.finishAuthentication(response.token),
          error => this.errorMessage = error.json().message          
      );
  }

}
