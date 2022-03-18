import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-navbar',
  templateUrl: './signup-navbar.component.html',
  styleUrls: ['./signup-navbar.component.css']
})
export class SignupNavbarComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }
  
  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }

  routeToLogInPage(){
    this.router.navigate(['/login']);
  }

}
