import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

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
