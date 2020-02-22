import { Component, OnInit } from '@angular/core';
import { PrincipalServiceService } from '../../services/principal-service.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historial: any;

  constructor(private Historial: PrincipalServiceService) {
    this.Historial.ObtenerHistorial().subscribe(
      data => {
        this.historial = data;
      //  console.log(JSON.stringify(this.historial));
        return this.historial;
      },
      error => {

        return "Error en data";
      }
    )

  }

  ngOnInit() {
  }

}
