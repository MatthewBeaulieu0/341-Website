import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { frontendUser } from 'src/app/models/frontendUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  newUser: frontendUser;
  constructor(private httpClient: HttpClient, private router: Router) {}
  
  exform: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({ 
    email: new FormControl( null, [Validators.required, Validators.email]),
    password: new FormControl( null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")])
    })
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }

  routeToSignUpPage() {
    this.router.navigate(['/signup']);
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
