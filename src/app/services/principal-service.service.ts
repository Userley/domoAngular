import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { Dispositivo } from '../interface/dispositivo';
import { Time } from '@angular/common';
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

  ActEstadoDispositivo(identificador: number, estado: number): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpCli.post('http://userleydiaz.com/api/dispositivos/actualizar', { "IdDispositivo": identificador, "Estado": estado }, { headers: headers });
  }

  GuardarHistorial(identificador: number, estado: string,fecha:string, hora:string,latitud:number,longitud:number): Observable<any> {

    var data: any = [
      {
        IdUsuario: 1,
        IdDispositivo: identificador,
        Estado: estado,
        Fecha: fecha,
        Hora: hora,
        Latitud: latitud,
        Longitud: longitud
      }
    ]

    let json = JSON.stringify(data);
    console.log(json);
    //let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpCli.post('http://userleydiaz.com/api/historial', json, { headers: headers });
  }

}
