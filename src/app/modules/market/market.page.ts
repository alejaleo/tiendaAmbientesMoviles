import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductService } from 'src/app/data/services/productService';
import { Product } from 'src/app/data/interfaces/product';
import { ListaProductoComponent } from "src/app/components/lista-producto/lista-producto.component";

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListaProductoComponent]
})
export class MarketPage implements OnInit {
  productsPage: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productsPage = this.productService.productsPage;
    if (this.productsPage.length === 0) {
      this.productService.getProducts();
    }
  }

}
