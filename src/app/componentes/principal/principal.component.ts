import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Dispositivo } from 'src/app/interface/dispositivo';
import { ActivatedRoute, Params } from '@angular/router';
import { PrincipalServiceService } from '../../services/principal-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dispositivosAll: Dispositivo;
  EstadosAll: any;

  constructor(private dispositivos: PrincipalServiceService) {
    this.CargarDispositivos();
  }

  CargarDispositivos() {
    this.dispositivos.Obtenerdispositivos().subscribe(
      data => {
        this.dispositivosAll = data;
        return this.dispositivosAll;
      },
      error => {
        return "error en data";
      }
    );
  }

  actualizar(id: number, estado: number) {
    let est: number;
    if (estado) {
      est = 1;
    } else {
      est = 0;
    }
    this.dispositivos.ActEstadoDispositivo(id, est).subscribe(
      data=>{
        this.CargarDispositivos();
      }
    );
    //console.log('ID:' + id + ' Estado:' + est);
  }

  ngOnInit() {
  }

}
