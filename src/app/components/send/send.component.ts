import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonCheckbox, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonCheckbox, IonInput]
})
export class SendComponent  implements OnInit {
  telefono: boolean = false;
  direccion: boolean = false;
  nombre: boolean = false;

  labelTelefono: string = 'Número de teléfono';
  labelDireccion: string = 'Dirección';
  labelNombre: string = 'Nombre completo';

  valorTelefono: string = '123-456-7890';
  valorDireccion: string = '123 Main St, City, State';
  valorNombre: string = 'Jose Carmelo';

  constructor() { }

  ngOnInit() {}

  bloquearTelefono() {
    this.telefono = !this.telefono;
  }

  bloquearDireccion() {
    this.direccion = !this.direccion;
  }

  bloquearNombre() {
    this.nombre = !this.nombre;
  }

}
