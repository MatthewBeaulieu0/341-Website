import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginStatusService } from 'src/app/services/login-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers: [LoginStatusService]
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    //private statusService: LoginStatusService
    
    ) { }
  //status :boolean = this.statusService.getLoginStatus();
  ngOnInit(): void {

  }


  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }
  routeToBuyerPage(){
    this.router.navigate(['/buyerpage'])
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

}
