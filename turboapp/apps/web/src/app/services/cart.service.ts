import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private eventCallback = new Subject<string>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream
  
  private cart: Cart[] = [];

  constructor(private httpClient: HttpClient) { }

  getCart() {
    return this.httpClient
      .get<any>('http://localhost:3001/user/id/1/shopping_cart');
      // .subscribe((response) => {
      //   this.cart = response.data[1];
      //   console.log('This cart' + JSON.stringify(this.cart[0].quantity));
      //   console.log(
      //     'This cart' + JSON.stringify(this.cart[0].product.name)
      //   );
      // });
      
  }


    
}
