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
import { ProductsService } from 'src/app/services/products.service';

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
    protected httpClient: HttpClient,
    private _productsService: ProductsService
  ) {
    //this.products = _productsService.getAllProducts();
  }

  getProductArray() {
    return this.products;
  }

  ngOnInit(): void {}

  routeToShoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }
}
