import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { frontendUser } from 'src/app/models/frontendUser';
import { GlobalUserService } from 'src/app/services/global-user.service';
import { LoginStatusService } from 'src/app/services/login-status.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [LoginStatusService]
})
export class HeaderComponent implements OnInit {
  user: frontendUser;
  searchInput: string;
  data: string;

  constructor(
    private router: Router,
    private searchService: SearchService,
    private globalUserService: GlobalUserService,
    private httpClient: HttpClient
    //private statusService: LoginStatusService
    
    ) { }

  onSearch() {
    console.log('item name sent ' + this.searchInput);
    //this.data = String(name);
    this.searchService.setQuery(this.searchInput);
    this.routeToSearchPage("/searchpage");
  }

  //status :boolean = this.statusService.getLoginStatus();
  ngOnInit(): void {

  }

  sendProductName(name: string){
    console.log('item name sent ' + name);
    this.data = String(name);
    this.searchService.setQuery(this.data);
    this.routeToSearchPage("/searchpage");
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
    if(this.globalUserService.getNewUser().user_id){
      this.httpClient
      .post<frontendUser>('route_to_logout', {}).subscribe((response)=>{
        this.user = response;
      });
    }
    else{
      this.router.navigate(['/signup']);
    }
  }
  routeToSearchPage(uri: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
