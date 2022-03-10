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

  public productID: any = [];
  public subject = new Subject<any>();
  private IDSource = new BehaviorSubject(this.productID);
  currentMessage = this.IDSource.asObservable();
  changeMessage(ID: string) {
    this.IDSource.next(ID);
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
