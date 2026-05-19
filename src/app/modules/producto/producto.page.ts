import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { CrearProductoComponent } from 'src/app/components/crear-producto/crear-producto.component';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { Product } from 'src/app/data/interfaces/product';
import { ProductService } from 'src/app/data/services/productService';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule, CrearProductoComponent, ListaProductoComponent]
})
export class ProductoPage implements OnInit {

  get productsPage() {
    return this.productService.localProducts;
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {}

  recibirProductoCreado(producto: Product) {
    console.log('Producto recibido en el padre: ', producto);
    this.productService.addProduct(producto);
  }

  deleteProduct(productId: number | string) {
    this.productService.deleteProduct(productId);
  }


}
