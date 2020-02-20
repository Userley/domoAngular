import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {

  constructor(private httpCli: HttpClient) {

  }

  Obtenerdispositivos(): Observable<any> {
    return this.httpCli.get('http://userleydiaz.com/api/dispositivos');
  }

  ObtenerusuariosbyID(coduser:number): Observable<any> {
    return this.httpCli.get('http://userleydiaz.com/api/usuarios/'+ coduser);
  }
}
