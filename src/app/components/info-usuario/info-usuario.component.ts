import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  standalone: true,
})
export class InfoUsuarioComponent  implements OnInit {

  estadoCivil: string = 'Soltero';
  direccion: string = 'Calle falsa 123';
  telefono: number = 34532456945;
  constructor() { }

  ngOnInit() {}

}
