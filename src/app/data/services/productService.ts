import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient){}

  productsPage: Product[] = [];
  localProducts: Product[] = [];

  addProduct(product: Product) {
    this.localProducts.push(product);
  }

  getProducts() {
    this.getProductsFromApi().subscribe({
      next:(response: Product[])=>{
        console.log("response",response)
        this.productsPage.push(...response);
        return this.productsPage;
      },
      error:(err)=>{
        console.error('Error al obtener productos desde la API: ', err);
        return this.productsPage;
      }
    })


  }

  deleteProduct(productId: number) {
    const index = this.localProducts.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.localProducts.splice(index, 1);
    }
  }

  getProductsFromApi():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  addProductToApi(product: Product):Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

}
