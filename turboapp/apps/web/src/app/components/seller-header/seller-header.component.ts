import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }

  routeToProductPage(){
    this.router.navigate(['/productpage']);
  }

  routeToAislePage(){
    this.router.navigate(['/aislepage']);
  }
  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }
  routeToSignUpPage(){
    this.router.navigate(['/signup']);
  }

  routeToSellerPage(){
    this.router.navigate(['/sellerpage']);
  }

}
