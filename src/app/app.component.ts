import { Component } from '@angular/core';
import { PrincipalServiceService } from '../app/services/principal-service.service';
import { Usuario } from './interface/usuario';
import { Dispositivo } from './interface/dispositivo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisdomo';

  usuariosAll: Usuario;
  coduser: number = 1;


  constructor(private usuarios: PrincipalServiceService) {

    this.usuarios.ObtenerusuariosbyID(this.coduser).subscribe(
      data => {
        this.usuariosAll = data;
        return this.usuariosAll;

      }
    );
  }

  ngOnInit() {

  }


}
