import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
})
export class ShoppingcartComponent implements OnInit {
  id: number;
  cart: Cart[] = [];
  totalProduct: number;

  deliveryFees = 10.0;

  constructor(private httpClient: HttpClient, private router: Router) {}

  getCart() {
    this.httpClient
      .get<any>('http://localhost:3001/user/id/1/shopping_cart')
      .subscribe((response) => {
        this.cart = response.data[1];
        console.log('This cart' + JSON.stringify(this.cart[0].quantity));
        console.log('This cart' + JSON.stringify(this.cart[0].product.name));
      });
  }

  subtotalProduct(cart: Cart) {
    return parseFloat((cart.quantity * cart.product.price).toFixed(2));
  }

  calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      subtotal += this.subtotalProduct(this.cart[i]);
    }
    console.log(subtotal);
    return parseFloat(subtotal.toFixed(2));
  }

  calculateTax() {
    return parseFloat(
      (this.calculateSubtotal() * 1.15 - this.calculateSubtotal()).toFixed(2)
    );
  }

  calculateTotal() {
    return (
      this.calculateSubtotal() +
      this.calculateTax() +
      this.deliveryFees
    ).toFixed(2);
  }

  onDelete(product_id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        product_id: product_id,
      },
    };
    const params = new HttpParams().set('user_id', 1); //user_id will have to eventually change to whoever is logged on
    this.httpClient
      .delete('http://localhost:3001/user/id/1/shopping_cart', options)
      .subscribe((s) => {
        console.log(s);
      });
    this.cart = this.cart.filter(
      (item) => item.product.product_id != product_id
    );
  }

  ngOnInit(): void {
    this.getCart();
  }

  //   updateTotal(){
  //     var cartItems = document.getElementsByClassName('cart-price');
  //     var total = 0;

  //     console.log(document.getElementsByClassName("cart-product-price")[0].innerHTML);

  //     for(var i = 0; i < cartItems.length; i++){
  //         var priceItem = document.getElementsByClassName('cart-product-price')[i];
  //         var price = parseFloat(priceItem.innerHTML.replace("$",""));
  //         var quantityItem = document.getElementsByClassName('cart-quantity')[i];
  //         var quantity = quantityItem.value;
  //         total = (total + (price * quantity)).toFixed(2);

  //         document.getElementsByClassName("cart-price")[i].innerHTML = total +"$";
  //         document.getElementsByClassName("subtotal-price")[i].innerHTML = total +"$";

  //     }
  // }
  myFunction() {
    alert('Hello! I am an alert box!');
  }
}
