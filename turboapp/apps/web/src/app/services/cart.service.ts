import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  link = "http://localhost:3001/user/id/1/shopping_cart";

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.link)
  }

  // items: Product[] = [];

  // addToCart(product: Product){
  //   this.items.push(product);
  // }

  // getItems() {
  //   return this.items;
  // }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}
