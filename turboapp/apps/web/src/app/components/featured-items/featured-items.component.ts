import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {

  images = ["https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png","https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png"];


  constructor() { }

  ngOnInit(): void {
  }

}
