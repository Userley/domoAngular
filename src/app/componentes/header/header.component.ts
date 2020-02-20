import { Component, OnInit } from '@angular/core';
import { PrincipalServiceService } from '../../services/principal-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuariosAll: any;
  coduser: number = 4;

  constructor(private Servicio: PrincipalServiceService) {
    this.Servicio.ObtenerusuariosbyID(this.coduser).subscribe(
      data => {
        this.usuariosAll = data;
        return this.usuariosAll;
        
      }
    );
  }

  ngOnInit() {

  }
}
