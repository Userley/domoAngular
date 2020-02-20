import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private dispositivos: PrincipalServiceService) {

    this.dispositivos.Obtenerdispositivos().subscribe(
      data => {
        this.dispositivosAll = data;
        return this.dispositivosAll;
      },
      error => {
        return "error en data";
      }
    );

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

  actualizar(id:number, estado:number) {

    let est: number;

    if (estado) {
      est = 1;
    } else {
      est = 0;
    }

    this.dispositivos.ActEstadoDispositivo(id, est).subscribe();

    console.log('ID:' + id + ' Estado:' + est);
  }

  ngOnInit() {
  }

}
