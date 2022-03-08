import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FeaturedItemsService {

  featuredItems: Product[] = [];

  constructor(
    private httpClient: HttpClient) { }

  getFeaturedItems(): any[] {
    this.httpClient
      .get<any>('http://localhost:3001/product/filter/products?name=')
      .subscribe((response) => {
        console.log(response[1]);
        console.log(response[1].length);
        for(let i = 0; i < response[1].length; i++){
          if(response[1][i].featured == 1)
          this.featuredItems.push(response[1][i]);
          console.log(this.featuredItems);
        }
        console.log('This product' + JSON.stringify(this.featuredItems[0].name));
        console.log('This product' + JSON.stringify(this.featuredItems[0].price));
      });
      return this.featuredItems;
  }
}

