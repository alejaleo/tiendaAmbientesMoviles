import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonBadge, IonButton, IonButtons, IonCard, IonCardContent,
  IonChip, IonContent, IonHeader, IonLabel, IonMenuButton,
  IonSearchbar, IonSkeletonText, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton,
    IonSearchbar,
    IonChip, IonLabel,
    IonCard, IonCardContent,
    IonBadge,
    IonButton,
    IonSkeletonText,
  ],
})
export class HomePage {

  nombre: string = 'Jose';
  busqueda: string = '';
  cargando: boolean = true;
  skeletons = [1, 2, 3, 4];

  categorias = [
    { id: 'Todo',        label: 'Todo',        icono: '🏪' },
    { id: 'Electrónica', label: 'Electrónica', icono: '📱' },
    { id: 'Ropa',        label: 'Ropa',        icono: '👗' },
    { id: 'Hogar',       label: 'Hogar',       icono: '🏠' },
    { id: 'Deporte',     label: 'Deporte',     icono: '⚽' },
  ];

  categoriaActiva: string = 'Todo';

  productos = [
    { nombre: 'Auriculares Pro',  precio: '$89.900',  precioOriginal: '$129.900', descuento: 31, icono: '🎧', color: '#0f3460', badge: 'Oferta', rating: 4.5, reviews: 128, categoria: 'Electrónica' },
    { nombre: 'Camiseta Básica',  precio: '$45.000',  precioOriginal: null,        descuento: null, icono: '👕', color: '#1a1a2e', badge: 'Nuevo',  rating: 4.2, reviews: 45,  categoria: 'Ropa' },
    { nombre: 'Lámpara LED',      precio: '$62.000',  precioOriginal: '$85.000',  descuento: 27, icono: '💡', color: '#16213e', badge: 'Oferta', rating: 4.8, reviews: 203, categoria: 'Hogar' },
    { nombre: 'Botella Térmica',  precio: '$38.500',  precioOriginal: null,        descuento: null, icono: '🍶', color: '#0f3460', badge: null,     rating: 4.0, reviews: 67,  categoria: 'Deporte' },
    { nombre: 'Smartwatch',       precio: '$156.000', precioOriginal: '$220.000', descuento: 29, icono: '⌚', color: '#1a0533', badge: 'Top',    rating: 4.7, reviews: 89,  categoria: 'Electrónica' },
    { nombre: 'Zapatillas Run',   precio: '$210.000', precioOriginal: null,        descuento: null, icono: '👟', color: '#0d2137', badge: 'Nuevo',  rating: 4.3, reviews: 34,  categoria: 'Deporte' },
  ];

  constructor() {
    setTimeout(() => {
      this.cargando = false;
    }, 1400);
  }

  get productosFiltrados() {
    return this.productos.filter(p => {
      const matchCategoria = this.categoriaActiva === 'Todo' || p.categoria === this.categoriaActiva;
      const matchBusqueda  = p.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
      return matchCategoria && matchBusqueda;
    });
  }

  seleccionarCategoria(id: string) {
    this.categoriaActiva = id;
  }

}
