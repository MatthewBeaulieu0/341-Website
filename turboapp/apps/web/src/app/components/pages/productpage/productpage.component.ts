import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
  providers: [ProductsService],
})
export class ProductpageComponent implements OnInit {
  // add section that gets information from database (get http request)
  constructor(
    private router: Router,
    private _productsService: ProductsService,
    private httpClient: HttpClient
  ) {}

  productID: any;

  ngOnInit(): void {
    this._productsService.currentMessage.subscribe(
      (id) => (this.productID = id)
    ); //<= Always get current value!
    this.getProduct(this.productID);
  }

  product: Product;

  getProduct(product_id: any) {
    // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   body: {
    //     product_id: product_id
    //   },
    // };
    var tempLink = 'http://localhost:3001/product/id/';
    var link = tempLink.concat(product_id.toString());
    this.httpClient.get<any>(link).subscribe((response) => {
      this.product = response.data;
      console.log('This product' + JSON.stringify(this.product.name));
    });
  }

  routeToMainPage() {
    this.router.navigate(['/mainpage']);
  }

  routeToShoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }
}
