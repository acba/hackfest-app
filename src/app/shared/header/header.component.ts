import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  nome: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    //this.nome = "admin";
    this.nome = this.auth.getNome().split(" ")[0];
  }

  onLogout(){
    this.auth.logout()
  }
}
