import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Input() usuarios:Usuario;



  constructor() {

  }

  ngOnInit() {

  }
}
