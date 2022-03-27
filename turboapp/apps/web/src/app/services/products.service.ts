import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  allProducts: Product[] = [];
  electronicProducts: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  private data:String = "";

  setData(data:String){
    this.data = data;
    console.log('setData: ' + this.data);
  }

  getData():String{
    console.log('getData: ' + this.data);
    return this.data;
  }

  getProduct(productID: string) {
    var tempLink = 'http://localhost:3001/product/id/';
    var link = tempLink.concat(productID.toString());
    return this.httpClient
      .get<any>(link)
  }

  getAllProducts() {
    return this.httpClient.get<any>(
      'http://localhost:3001/product/filter/products?name='
    );
    // .subscribe((response) => {
    //   console.log(response[1]);
    //   this.allProducts = response[1];
    //   console.log('This product' + JSON.stringify(this.allProducts[0].name));
    //   console.log('This product' + JSON.stringify(this.allProducts[0].price));
    // });
    // return this.allProducts;
  }

  getElectronicProducts() {}
  // TODO make switch with function arguments
}
