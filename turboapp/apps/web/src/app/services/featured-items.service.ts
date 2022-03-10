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

  getFeaturedItems(){
    return this.httpClient
      .get<any>('http://localhost:3001/product/filter/products?name=');
      
  }
}

