import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  data:any;

  // add section that gets information from database (get http request)
  constructor(
    private router: Router,
    private _productsService: ProductsService,
    private httpClient: HttpClient
  ) {}

  productID: string;
  product: Product[]=[];
  mainLink: string;
  subLink1: string;
  subLink2: string;
  subLink3: string;
  subLink4: string;
  quantity: number = 1;


  addToCart(){
    console.log(this.product);
    console.log(this.quantity);
    const body = {
      product_id: this.productID,
      quantity: this.quantity
    };
    this.httpClient
      .put('http://localhost:3001/user/id/1/shopping_cart', body, {
        responseType: 'text',
        headers: { 'content-type': 'application/json' },
      })
      .subscribe((s) => {
        console.log(s);
      });
  }

  selectPicture(source: string, i: number){
    let tempLink = this.mainLink;
    this.mainLink = source;
    // switch(i){
    //   case 1:{
    //     this.subLink1 = tempLink;
    //     console.log("case1");
    //     break;
    //   }
    //   case 2:{
    //     this.subLink2 = tempLink;
    //     console.log("case2");
    //     break;
    //   }
    //   case 3: {
    //     this.subLink3 = tempLink;
    //     break;
    //   }
    //   case 4: {
    //     this.subLink4 = tempLink;
    //     break;
    //   }
    // }
  }

  routeToMainPage() {
    this.router.navigate(['/mainpage']);
  }

  routeToShoppingCart() {
    this.router.navigate(['/shoppingcart']);
  }

  ngOnInit() {
    this.data = this._productsService.getData();
    console.log('ngOnInit: ' + this.data);
    this.productID = this.data;
    this._productsService.getProduct(this.productID).subscribe((response) => {
      this.product = response[1];
      this.mainLink = this.product[0].link;
      this.subLink1 = this.mainLink;
      //console.log('This product ' );
      console.log(JSON.stringify(this.product[0].name));
    });
  }
}
