import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {
  socket: any;
  readonly url: string = "https://pokeapi.co/api/v2/pokemon/ditto/"
  constructor(public httpCli: HttpClient) {
    // this.socket = io(this.url);

  }
  // listen(parametro: string) {
  //   return new Observable((Subscriber) => {
  //     this.socket.on(parametro, (data) => {
  //       Subscriber.next(data);
  //     })
  //   });
  // }

  // emit(parametro: string, data: any) {
  //   this.socket.emit(parametro, data);
  // }
  Obtenerdispositivos(): Observable<any> {
    return this.httpCli.get('https://userleydiaz.com/api/dispositivos');
  }

  ObtenerdispositivosEstados(){
        return this.httpCli.get('https://userleydiaz.com/api/dispositivos/estado');
  }

  ObtenerusuariosbyID(coduser: number): Observable<any> {
    return this.httpCli.get('https://userleydiaz.com/api/usuarios/' + coduser);
  }

  ObtenerHistorial(): Observable<any> {
    return this.httpCli.get('https://userleydiaz.com/api/historial');
  }

  ActEstadoDispositivo(identificador: number, estado: number): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpCli.post('https://userleydiaz.com/api/dispositivos/actualizar', { "IdDispositivo": identificador, "Estado": estado }, { headers: headers });
  }

  GuardarHistorial(identificador: number, estado: string, fecha: string, hora: string, latitud: number, longitud: number): Observable<any> {

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
    return this.httpCli.post('https://userleydiaz.com/api/historial', json, { headers: headers });
  }

}
