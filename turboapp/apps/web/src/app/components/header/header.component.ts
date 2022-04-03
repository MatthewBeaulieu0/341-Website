import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginStatusService } from 'src/app/services/login-status.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [LoginStatusService]
})
export class HeaderComponent implements OnInit {

  searchInput: string;
  data: string;

  constructor(
    private router: Router,
    private searchService: SearchService,
    //private statusService: LoginStatusService
    
    ) { }

  onSearch() {
    console.log('item name sent ' + this.searchInput);
    //this.data = String(name);
    this.searchService.setQuery(this.searchInput);
    this.routeToSearchPage();
  }

  //status :boolean = this.statusService.getLoginStatus();
  ngOnInit(): void {

  }

  sendProductName(name: string){
    console.log('item name sent ' + name);
    this.data = String(name);
    this.searchService.setQuery(this.data);
    this.routeToSearchPage();
  }

  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }

  routeToProductPage(){
    this.router.navigate(['/productpage']);
  }

  routeToAislePage(){
    this.router.navigate(['/aislepage']);
  }
  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }
  routeToSignUpPage(){
    this.router.navigate(['/signup']);
  }
  routeToSearchPage(){
    this.router.navigate(['/searchpage']);
  }

}
