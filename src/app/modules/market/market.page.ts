import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, ToastController } from '@ionic/angular/standalone';
import { ProductService } from 'src/app/data/services/productService';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { Product } from 'src/app/data/interfaces/product';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule, ListaProductoComponent]
})
export class MarketPage implements OnInit {
  get productos(): Product[] {
    return [...this.productService.localProducts, ...this.productService.productsPage];
  }

  constructor(
    private productService: ProductService,
    private toastController: ToastController
  ) {
    addIcons({ cartOutline });
  }

  ngOnInit() {
    this.productService.getProducts();
  }

  async onAgregarAlCarrito() {
    const toast = await this.toastController.create({
      message: 'Tu producto se agregó al carrito correctamente',
      duration: 2500,
      position: 'top',
      icon: 'cart-outline',
      cssClass: 'toast-carrito',
    });
    await toast.present();
  }
}
