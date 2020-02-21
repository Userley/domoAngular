import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { Dispositivo } from '../interface/dispositivo';
@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {

  constructor(private httpCli: HttpClient) {

  }

  Obtenerdispositivos(): Observable<any> {
    return this.httpCli.get('http://userleydiaz.com/api/dispositivos');
  }

  ObtenerusuariosbyID(coduser: number): Observable<any> {
    return this.httpCli.get('http://userleydiaz.com/api/usuarios/' + coduser);
  }

  ObtenerHistorial(): Observable<any> {
    return this.httpCli.get('http://userleydiaz.com/api/historial');
  }

  ActEstadoDispositivo(identificador:number, estado: number): Observable<any> {

var data:any=[
  {
    IdDispositivo: identificador,
    Estado:estado
  }
]
//console.log(identificador);
    let json = JSON.stringify(data);
    console.log({"IdDispositivo":identificador,"Estado":estado});
    //let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpCli.post('http://userleydiaz.com/api/dispositivos/actualizar', {"IdDispositivo":identificador,"Estado":estado}, { headers: headers });
  }

}
