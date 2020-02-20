import { Component, OnInit } from '@angular/core';
import { PrincipalServiceService } from '../../services/principal-service.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dispositivosAll: any;
  showMe:number=1;

  constructor(private dispositivos: PrincipalServiceService) {
    this.dispositivos.Obtenerdispositivos().subscribe(
      data => {
        this.dispositivosAll = data;
        return this.dispositivosAll;
      },
      error => {
        return "error en data";
      }
    )

  }
  
  checkedTickets = [];
  onCheck(evt) {
    if (!this.checkedTickets.includes(evt)) {
      this.checkedTickets.push(evt);
    } else {
      var index = this.checkedTickets.indexOf(evt);
      if (index > -1) {
        this.checkedTickets.splice(index, 1);
      }
    }
    console.log(this.checkedTickets);
  }

  ngOnInit() {
  }

}
