import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mensagem: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.mensagem = (this.auth.getCertificados().length === 1) ? 'Certificado' : 'Certificados';
  }
}
