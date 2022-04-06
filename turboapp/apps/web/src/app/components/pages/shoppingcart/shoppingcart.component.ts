import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { frontendUser } from 'src/app/models/frontendUser';
import { GlobalUserService } from 'src/app/services/global-user.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  providers: [CartService],
})
export class ShoppingcartComponent implements OnInit {
  user: frontendUser;
  id: number;
  cart: Cart[] = [];
  totalProduct: number;

  deliveryFees = 10.0;

  constructor(
    private httpClient: HttpClient,
    private _cartService: CartService,
    private router: Router,
    private globalUserService: GlobalUserService
  ) {}

  // getCart() {
  //   //console.log(this.globalUserService.getNewUser())
  //   this.httpClient
  //     .get<any>(
  //       'http://localhost:3001/user/id/' +  '/shopping_cart'
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.cart = response.data[1];
  //       console.log('This cart' + JSON.stringify(this.cart[0].quantity));
  //       console.log(
  //         'This cart' + JSON.stringify(this.cart[0].product.featured)
  //       );
  //     });
  // }

  // getCart(){
  //   this._cartService.getCart()
  //     .subscribe(

  //     )
  // }

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
    console.log(this.cart);
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
    this.httpClient
      .delete(
        'http://localhost:3001/user/id/' +
          this.globalUserService.getNewUser().user_id +
          '/shopping_cart',
        options
      )
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
  //           console.log(this.user.user_id);
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
    return new Promise<void>((resolve, reject) => {
      this._cartService.getCart().subscribe((response) => {
        this.cart = response.data[1];
      });
      resolve();
    });
  }
  ngOnInit(): void {
    this.cartInit();
  }

  routeToCheckOutPage() {
    this.router.navigate(['/checkoutpage']);
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
