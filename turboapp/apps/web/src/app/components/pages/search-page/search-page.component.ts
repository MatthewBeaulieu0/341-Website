import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalUserService } from 'src/app/services/global-user.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  products: Product[] = [];
  data:any = {text: "1"};
  userQuery = this.searchService.getQuery();
  product: Product;

  constructor(
    private searchService: SearchService,
    private productsService: ProductsService,
    private router: Router,
    private httpClient: HttpClient,
    private globalUserService: GlobalUserService
    ) { 
    
  }

  ngOnInit(): void {
    this.searchService.getSearchProducts().subscribe((products) => {
      this.products = products[1];
    });;
  }

  sendProductID(id: number) {
    console.log('product id sent: ' + id);
    this.data = String(id);
    this.productsService.setData(this.data);
    this.router.navigate(['/productpage']);    
  }

  addToCart(product_id: number) {
    console.log(product_id);
    const body = {
      product_id: product_id,
      quantity: 1,
    };
    this.httpClient
      .put('http://localhost:3001/user/id/' + this.globalUserService.getNewUser().user_id +  '/shopping_cart', body, {
        responseType: 'text',
        headers: { 'content-type': 'application/json' },
      })
      .subscribe((s) => {
        console.log(s);
      });
    
  }

}
