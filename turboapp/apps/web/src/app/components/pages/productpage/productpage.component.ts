import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  price=5.99;
  items="Fake Airpods";

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }

  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }

}
