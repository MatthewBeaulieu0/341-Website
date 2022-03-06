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
  extends MainpageComponent
  implements OnInit
{
  override products = this.getProductArray();

  productPageRoute() {
    this.router.navigate(['/productpage']);
  }

  constructor(
    // private route: ActivatedRoute,
    // private cartService: CartService,
    // private httpClient: HttpClient
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override httpClient: HttpClient
  ) {
    super(router, activatedRoute, httpClient);
  }

  override ngOnInit(): void {}
}
