import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  products: Product[] = [];
  data:any = {text: "1"};

  constructor(
    private searchService: SearchService,
    private productsService: ProductsService,
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    let products = this.searchService.getSearchProducts().subscribe((products) => {
      console.log(products);
      this.products = products[1];
    });;
  }

  sendProductID(id: number) {
    console.log('product id sent: ' + id);
    this.data = String(id);
    this.productsService.setData(this.data);
    this.router.navigate(['/productpage']);    
  }

}
