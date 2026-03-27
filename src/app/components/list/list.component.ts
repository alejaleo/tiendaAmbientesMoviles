import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [NgFor, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption]
})
export class ListComponent implements OnInit {

  lista: string[] = ['Nequi', 'Daviplata', 'NuBank', 'Bancolombia', 'Banco de Bogotá'];

  tarjeta:          string = '**** **** **** 1234';
  fechaVencimiento: string = '12/24';
  cvv:              string = '***';
  nombreTarjeta:    string = 'Jose Carmelo';
  direccion:        string = '123 Main St, City, State';

  constructor() {}

  ngOnInit() {}
}
