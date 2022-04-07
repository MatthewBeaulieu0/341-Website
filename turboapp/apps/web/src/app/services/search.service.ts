import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  query: string;
  constructor(
    private httpClient: HttpClient
    ) { }

  getQuery(){
    return this.query;
  }

  setQuery(query: string){
    this.query = query;
  }

  getSearchProducts(): any {
    const body = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        "name": "",
        // category: "fruits",
        // price: 1000,
        "limit": 1000,
        "skip": 0
      },
    };
    console.log(this.query);
    return this.httpClient
      .get(
        'http://localhost:3001/product/filter/products?name=' + this.query,
        body
      );
  } 
}
