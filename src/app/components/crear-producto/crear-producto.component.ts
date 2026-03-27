import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { idCardOutline, pricetagOutline, cashOutline, documentTextOutline, gridOutline, imageOutline, starOutline, peopleOutline } from 'ionicons/icons';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonIcon,
  ],
})
export class CrearProductoComponent implements OnInit {
  texto: string = 'Crear Producto';
  id: string = '4';
  title: string = 'Nuevo Producto';
  price: number = 1500;
  description: string = 'Ese producto es nuevo y de alta calidad';
  category: string = 'ropa';
  image: string = 'url_de_la_imagen';
  rating: { rate: number | null; count: number | null } = {
    rate: 5,
    count: 120,
  };

  constructor() {
    addIcons({ idCardOutline, pricetagOutline, cashOutline, documentTextOutline, gridOutline, imageOutline, starOutline, peopleOutline });
  }

  ngOnInit() {}

  mostrarTexto() {
    console.log('texto: ', this.texto);
    console.log('Id: ', this.id);
    console.log('Title: ', this.title);
    console.log('price', this.price);
    console.log('description: ', this.description);
    console.log('category: ', this.category);
    console.log('image: ', this.image);
    console.log('Raiting:', this.rating);
  }
}
