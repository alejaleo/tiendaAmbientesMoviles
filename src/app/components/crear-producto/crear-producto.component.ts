import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pricetagOutline, cashOutline, documentTextOutline, gridOutline, imageOutline, starOutline, peopleOutline } from 'ionicons/icons';
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
import { Product } from 'src/app/data/interfaces/product';



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
  title: string = '';
  price: number | null = null;
  description: string = '';
  category: string = '';
  image: string = '';
  rating: { rate: number | null; count: number | null } = {
    rate: null,
    count: null,
  };

  @Output() productoCreado = new EventEmitter<Product>();

  constructor() {
    addIcons({ pricetagOutline, cashOutline, documentTextOutline, gridOutline, imageOutline, starOutline, peopleOutline });
  }

  ngOnInit() {}

  mostrarTexto() {
    console.log('texto: ', this.texto);
    console.log('Title: ', this.title);
    console.log('price', this.price);
    console.log('description: ', this.description);
    console.log('category: ', this.category);
    console.log('image: ', this.image);
    console.log('Raiting:', this.rating);
  }

  crearProducto() {
    const nuevoProducto: Product = {
      id: crypto.randomUUID(),
      title: this.title,
      price: this.price ?? 0,
      description: this.description,
      category: this.category,
      image: this.image,
      rating: {
        rate: this.rating.rate ?? 0,
        count: this.rating.count ?? 0
      }
    };
    this.productoCreado.emit(nuevoProducto);
    console.log('Producto creado: ', nuevoProducto);
  }
}
