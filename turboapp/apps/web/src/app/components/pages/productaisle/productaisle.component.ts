import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productaisle',
  templateUrl: './productaisle.component.html',
  styleUrls: ['./productaisle.component.css']
})
export class ProductaisleComponent implements OnInit {

  images = ["https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png","https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png"];

  price = 5.99;
  item = "airpods";

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){

  }

}
