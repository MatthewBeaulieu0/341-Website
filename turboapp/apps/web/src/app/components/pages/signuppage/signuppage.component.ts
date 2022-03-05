import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor() { }

  onClickSubmit(data){
    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.email);
    console.log(data.number);
    console.log(data.password);
  }

  ngOnInit(): void {
  }

}
