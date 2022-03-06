import { Identifiers } from '@angular/compiler';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Input,
} from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  products: Product[] = [];

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected httpClient: HttpClient
  ) {}

  getProducts() {
    this.httpClient
      .get<any>('http://localhost:3001/product/filter/products?name=')
      .subscribe((response) => {
        console.log(response[1]);
        this.products = response[1];
        console.log('This product' + JSON.stringify(this.products[0].name));
        console.log('This product' + JSON.stringify(this.products[0].price));
      });
  }

  getProductArray() {
    return this.products;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  routeToShoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }
}
