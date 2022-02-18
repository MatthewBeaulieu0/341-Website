import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {

  images = ["https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png","https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png", "https://images-na.ssl-images-amazon.com/images/G/15/DVD/04_-_NEW_FamilyStripe_AirPods_3rd._CB653734269_.png"];

  price = 5.99;
  item = "airpods";

  products: Product[];


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

}
