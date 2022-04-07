import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { FeaturedItemsService } from 'src/app/services/featured-items.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css']
})
export class FeaturedItemsComponent implements OnInit {


  data:any = {text: "1"};

  
  featuredItems: Product[] = [];

  constructor(
    private _featuredItemsService: FeaturedItemsService,
    private _productsService: ProductsService,
    private router: Router
  ) {}

  sendProductID(id: number) {
    console.log('featured items id sent: ' + id);
    this.data = String(id);
    this._productsService.setData(this.data);
    this.router.navigate(['/productpage']);    
  }

  ngOnInit(): void {
    this._featuredItemsService.getFeaturedItems().subscribe((response) => {
      console.log(response[1]);
      console.log(response[1].length);
      for (let i = 0; i < response[1].length; i++) {
        if (response[1][i].featured == 1) {
          this.featuredItems.push(response[1][i]);
        }
        console.log(this.featuredItems);
      }
      console.log('This product' + JSON.stringify(this.featuredItems[0].name));
      console.log('This product' + JSON.stringify(this.featuredItems[0].price));
    });
  }
}
