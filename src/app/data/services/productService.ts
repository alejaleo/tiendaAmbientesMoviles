import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  productsPage: Product[] = [];
  localProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    if (this.productsPage.length > 0) return;
    this.http.get<Product[]>(this.url).subscribe({
      next: (response) => { this.productsPage.push(...response); },
      error: (err) => { console.error('Error al obtener productos: ', err); }
    });
  }

  addProduct(product: Product) {
    this.localProducts.push(product);
  }

  deleteProduct(productId: number | string) {
    this.localProducts = this.localProducts.filter(p => p.id !== productId);
  }

  addProductToApi(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }
}
