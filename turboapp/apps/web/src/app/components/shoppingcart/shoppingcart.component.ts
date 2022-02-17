import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cartItems: Array<Product> = [];
  total: number;
  quantityItem: number;
  quantity: number;

  constructor() { }

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
//         var quantity = quantityItem.value
//         total = (total + (price * quantity)).toFixed(2);

//         document.getElementsByClassName("cart-price")[i].innerHTML = total +"$";
//         document.getElementsByClassName("subtotal-price")[i].innerHTML = total +"$";


//     }
// }
myFunction() {
  alert("Hello! I am an alert box!");
}

}
