import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  providers: [CartService]
})
export class ShoppingcartComponent implements OnInit {
  id: number;
  cart: Cart[] = [];
  totalProduct: number;

  deliveryFees = 10.0;

  constructor(
    private httpClient: HttpClient, 
    private _cartService = CartService) {
      //this.cart = this._cartService.getCart();
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

  updateCart(event, id: number) {
    const newqty = event.target.value;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product.product_id == id) {
        this.cart[i].quantity = newqty;
        this.subtotalProduct(this.cart[i]);
      }
    }
    this.calculateSubtotal();
    this.calculateTax();
    this.calculateTotal();
  }

  ngOnInit(): void {
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
