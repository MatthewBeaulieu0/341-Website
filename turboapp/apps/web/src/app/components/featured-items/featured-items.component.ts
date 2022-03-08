import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { FeaturedItemsService } from 'src/app/services/featured-items.service';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css'],
  providers: [FeaturedItemsService]
})
export class FeaturedItemsComponent
  implements OnInit
{
  featuredItems: Product[] = [];

  constructor(
    private _featuredItemsService: FeaturedItemsService
  ) {
    this.featuredItems = this._featuredItemsService.getFeaturedItems();
  }

  

  ngOnInit(): void {
  }
}
