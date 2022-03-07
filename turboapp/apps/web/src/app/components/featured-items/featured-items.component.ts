import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { MainpageComponent } from '../pages/mainpage/mainpage.component';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css'],
})
export class FeaturedItemsComponent
  implements OnInit
{
  featuredItems: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private httpClient: HttpClient
  ) {
  }

  getFeaturedItems() {
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
  }

  ngOnInit(): void {
    this.getFeaturedItems();
  }
}
