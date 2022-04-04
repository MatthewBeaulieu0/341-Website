import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sellerpage',
  templateUrl: './sellerpage.component.html',
  styleUrls: ['./sellerpage.component.css']
})
export class SellerpageComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  product: Product = {
    product_id: 0,
    name: '',
    description: '',
    price: 0,
    brand: '',
    seller: '',
    stock: 0,
    link: '',
    featured: false,
    link_array: null,
  };

  ngOnInit(): void {
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }
  

  onClickSubmit(data){

    //verifying item name
    if (/^[A-Za-z ,.'-]+$/i.test(data.name)) {
      // add to db

      console.log(data.name);
    } else {
      console.log('invalid item name');
    }

    // verifying description
    if (/^[A-Za-z 0-9 ,.'-]+$/i.test(data.description)) {
      // add to db
      console.log(data.description);
    } else {
      console.log('invalid description');
    }

    // verifying price
    if (/^[0-9]+$/i.test(data.price)) {
      // add to db
      console.log(data.price);
    } else {
      console.log('invalid price');
    }

    // verifying brand
    if (/^[A-Za-z 0-9 ,.'-]+$/i.test(data.brand)) {
      // add to db
      console.log(data.brand);
    } else {
      console.log('invalid brand');
    }

    // verifying seller
    if (/^[A-Za-z ,.'-]+$/i.test(data.seller)) {
      // add to db
      console.log(data.seller);
    } else {
      console.log('invalid seller');
    }

    // verifying price
    if (/^[0-9]+$/i.test(data.stock)) {
      // add to db
      console.log(data.stock);
    } else {
      console.log('invalid stock');
    }

    if(
      /^[A-Za-z ,.'-]+$/i.test(data.name) && 
      /^[A-Za-z 0-9 ,.'-]+$/i.test(data.description) &&
      /^[0-9]+$/i.test(data.price) &&
      /^[A-Za-z 0-9 ,.'-]+$/i.test(data.brand) &&
      /^[A-Za-z ,.'-]+$/i.test(data.seller) &&
      /^[0-9]+$/i.test(data.stock)
    )
    //testing all the conditions before sending to backend
    {
      let itemName: string = data.name;
      let description: string = data.description;
      let price: number = data.price;
      let brand: string = data.brand;
      let seller: string = data.seller;
      let stock: number = data.stock;  

      this.product.name = itemName;
      this.product.description = description;
      this.product.price = price;
      this.product.brand = brand;
      this.product.seller = seller;
      this.product.stock = stock;

      console.log(this.product);

      //Send HTTP request
      const body = {
        product: this.product,
      };

      this.httpClient
        .post('http://localhost:3001/product', body, {
          responseType: 'text',
          headers: { 'content-type': 'application/json' },
        })
        .subscribe((s) => {
          console.log(s);
        });
    }

  }
}
