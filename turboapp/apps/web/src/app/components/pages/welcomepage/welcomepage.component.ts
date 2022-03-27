import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/app/services/login-status.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(
    private router: Router,
    private statusService: LoginStatusService
    ) { }
  
  status :boolean = this.statusService.getLoginStatus();
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
