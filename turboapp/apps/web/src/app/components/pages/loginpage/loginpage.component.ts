import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { frontendUser } from 'src/app/models/frontendUser';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  newUser: frontendUser;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  routeToSignUpPage() {
    this.router.navigate(['/signup']);
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }

  onClickLogin(data) {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
    ) {
      console.log('Not an email');
    }
    const body = {
      email: data.email,
      password: data.password,
    };
    this.httpClient
      .post<frontendUser>('http://localhost:3001/user/api/login', body, {
        withCredentials: true,
      })
      .subscribe((response) => {
        this.newUser = response;
      });
  }
  // requestAnnoyingThing() {
  //   this.httpClient
  //     .post('http://localhost:3001/user/api/verify', {
  //       withCredentials: true,
  //     })
  //     .subscribe((s) => {
  //       console.log(s);
  //     });
  // }
}
