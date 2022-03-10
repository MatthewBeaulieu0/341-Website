import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  onClickSubmit(data){

    //verifying first name
    if(/^[a-z ,.'-]+$/i.test(data.firstname)){
      // add to db
      console.log(data.firstname);
    } else {
      console.log("invalid first name");
    }

    // verifying last name
    if(/^[a-z ,.'-]+$/i.test(data.lastname)){
      // add to db
      console.log(data.lastname);
    } else {
      console.log("invalid last name");
    }

    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)){
      // add to db
      console.log(data.email);
    } else {
      console.log("invalid email address");
    }

    if(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(data.number)){
      // add to db
      console.log(data.number);
    } else {
      console.log("invalid number");
    }

    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password)){
      //add to db
      console.log(data.password)
    } else {
      console.log("Password must have at least 8 characters, at least 1 letter and 1 number");
    }
  }

  ngOnInit(): void {
  }
  routeToLogInPage(){
    this.router.navigate(['/login']);
  }

}