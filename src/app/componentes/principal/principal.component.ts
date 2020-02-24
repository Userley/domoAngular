import { Component, OnInit } from '@angular/core';
import { Dispositivo } from 'src/app/interface/dispositivo';
import { PrincipalServiceService } from '../../services/principal-service.service';
import { Geolo } from 'src/app/interface/geolo';
//import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dispositivosAll: Dispositivo;
  EstadosAll: any;
  lat: number;
  lon: number;
  constructor(private dispositivos: PrincipalServiceService) {
    this.CargarDispositivos();
  }

  public CargarDispositivos() {
    this.dispositivos.Obtenerdispositivos().subscribe(
      data => {
        this.dispositivosAll = data;
        return this.dispositivosAll;
      },
      error => {
        return "error en data";
      }
    );
    this.dispositivos.Obtenerdispositivos().subscribe().unsubscribe();
  }

  actualizar(id: number, estado: number) {
    let est: number;
    let eststring: string;

    if (estado) {
      est = 1;
      eststring = "Activado";
    } else {
      est = 0;
      eststring = "Desactivado";
    }
    this.dispositivos.ActEstadoDispositivo(id, est).subscribe(
      data => {

        var f = new Date();
        var Fecha: string = f.getFullYear() + '-' + (f.getMonth() + 1) + '-' + f.getDate();
        var hora = (f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds());


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(data => {
            this.lat = data.coords.latitude;
            this.lon = data.coords.longitude;
          }
          );
          console.log(this.lat + this.lon);
          this.dispositivos.GuardarHistorial(id, eststring, Fecha, hora, this.lat, this.lon).subscribe();
        } else {
          this.dispositivos.GuardarHistorial(id, eststring, Fecha, hora, this.lat, this.lon).subscribe();
        }
        this.CargarDispositivos();
      }
    );

  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        this.lat = data.coords.latitude;
        this.lon = data.coords.longitude;
      }
      );
     // console.log(this.lat + this.lon);
    } else {
      this.lat = 0;
      this.lon = 0;
    };

  }

}
