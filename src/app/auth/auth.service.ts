import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { API_URL } from './../app.constants';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  login(credentials): Observable<Response> {
    return this.http.post(`${API_URL}/login`, credentials);
  }

  finishAuthentication(token): void {
    localStorage.setItem('token', token);    
    this.router.navigate(['dashboard']);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return tokenNotExpired('token');
  }

  getNome(): string {
    return jwtDecode(this.getToken()).nome;
  }

  getCertificados(): Array<string> {
    return jwtDecode(this.getToken()).certificados;
  }

  getCPF(): string {
    return jwtDecode(this.getToken()).cpf;
  }
  
  getToken(): string {
    return localStorage.getItem('token');
  } 
}