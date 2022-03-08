import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allProducts: Product[] = [];
  electronicProducts: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): any[] {
    this.httpClient
      .get<any>('http://localhost:3001/product/filter/products?name=')
      .subscribe((response) => {
        console.log(response[1]);
        this.allProducts = response[1];
        console.log('This product' + JSON.stringify(this.allProducts[0].name));
        console.log('This product' + JSON.stringify(this.allProducts[0].price));
      });
      return this.allProducts;
  }

  getElectronicProducts() {

  }

}
