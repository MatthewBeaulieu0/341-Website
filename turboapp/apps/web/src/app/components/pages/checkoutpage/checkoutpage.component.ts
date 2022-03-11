import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }

}