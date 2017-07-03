import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { API_URL } from './../../app.constants';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class DownloadService {

  constructor(private router: Router, private authHttp: AuthHttp, private http: Http) { }

  downloadFile(certificado : string) {

    let options = new RequestOptions({responseType: ResponseContentType.Blob });

    return this.authHttp.get(`${API_URL}/download/${certificado}`, options)
              .map((res : any) => new Blob([res._body],{ type: 'application/pdf' }));
  }
}
