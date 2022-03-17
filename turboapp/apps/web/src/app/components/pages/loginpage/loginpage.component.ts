import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClient: HttpClient
    ) { }

    exform: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({ 
    email: new FormControl( null, [Validators.required, Validators.email]),
    password: new FormControl( null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")])
    })
  }

  routeToSignUpPage(){
    this.router.navigate(['/signup']);
  }

  routeToMainPage(){
    this.router.navigate(['/mainpage']);
  }

}