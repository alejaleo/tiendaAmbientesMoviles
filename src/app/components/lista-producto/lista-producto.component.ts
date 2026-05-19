import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Product } from 'src/app/data/interfaces/product';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
  standalone: true,
  imports: [NgFor, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton],
})
export class ListaProductoComponent  implements OnInit {
  @Input() listaProductos:Product[] = []
  @Input() mostrarEliminar: boolean = false;
  @Output() productoEliminado = new EventEmitter<number>();


  constructor( ) { }

  ngOnInit() {}

  deleteProduct(productId: number) {
    this.productoEliminado.emit(productId);
  }


}
