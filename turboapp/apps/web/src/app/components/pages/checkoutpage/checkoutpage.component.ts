import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { frontendUser } from 'src/app/models/frontendUser';
import { CartService } from 'src/app/services/cart.service';
import { GlobalUserService } from 'src/app/services/global-user.service';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css'],
})
export class CheckoutpageComponent implements OnInit {
  user: frontendUser;
  cart: Cart[] = [];
  deliveryFees = 10.0;
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private _cartService: CartService,
    private globalUserService: GlobalUserService
  ) {}
  // userInit() {
  //   return new Promise<void>((resolve, reject) => {
  //     let headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     });
  //     this.httpClient
  //       .post<any>('http://localhost:3001/user/api/session', null, {
  //         withCredentials: true,
  //         headers,
  //       })
  //       .subscribe(
  //         (s) => {
  //           this.user = s;
  //           //console.log(this.user.user_id);
  //           resolve();
  //         },
  //         (error) => {
  //           return false;
  //         }
  //       );
  //     if (!this.user) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  // }
  cartInit() {
    return new Promise<void>((resolve, reject) =>{
    this._cartService.getCart().subscribe((response) => {
      this.cart = response.data[1];
    });resolve();});
  }
  ngOnInit(): void {
    this.cartInit();
  }
  calculateTotal() {
    console.log(this.cart);
    return (
      this.calculateSubtotal() +
      this.calculateTax() +
      this.deliveryFees
    ).toFixed(2);
  }
  calculateTax() {
    return parseFloat(
      (this.calculateSubtotal() * 1.15 - this.calculateSubtotal()).toFixed(2)
    );
  }
  calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      subtotal += this.subtotalProduct(this.cart[i]);
    }
    console.log(subtotal);
    return parseFloat(subtotal.toFixed(2));
  }
  subtotalProduct(cart: Cart) {
    return parseFloat((cart.quantity * cart.product.price).toFixed(2));
  }

  routeToShoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }
}
