import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  routeToSignUpPage() {
    this.router.navigate(['/signup']);
  }
  onClickLogin(data) {
    console.log(data.email);
  }
}
