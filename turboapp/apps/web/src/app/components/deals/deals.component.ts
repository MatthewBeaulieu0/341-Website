import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class DealsComponent implements OnInit {
  productList: Array<Product> = [];

  constructor() {}

  ngOnInit(): void {}

  /*
  creating new products as a placeholder but these items will be added unto 
  ProductList from the backend using the Product model
  */

  creatingProducts() {

  }
}
