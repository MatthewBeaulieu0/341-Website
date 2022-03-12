import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css'],
})
export class SignuppageComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}
  user: User = {
    name: '',
    password: '',
    seller: false,
    age: 0,
    email: '',
    address: '',
  };
  checkboxes = [
    { checked: false, value: 'Yes' },
    { checked: false, value: 'No' },
  ];

  disableOther(chk) {
    this.checkboxes.forEach((x) => {
      if (x.value !== chk.value) {
        x.checked = !x.checked;
      }
    });
  }

  onClickSubmit(data) {
    //verifying first name
    if (/^[a-z ,.'-]+$/i.test(data.firstname)) {
   
      // add to db

      console.log(data.firstname);
    } else {
      console.log('invalid first name');
    }

    // verifying last name
    if (/^[a-z ,.'-]+$/i.test(data.lastname)) {
      // add to db
      console.log(data.lastname);
    } else {
      console.log('invalid last name');
    }

    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
    ) {
      // add to db
      console.log(data.email);
    } else {
      console.log('invalid email address');
    }
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password)) {
      //add to db
      console.log(data.password);
    } else {
      console.log(
        'Password must have at least 8 characters, at least 1 letter and 1 number'
      );
    }

    console.log(data.date);
    if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i.test(data.date)) {
      var myArr = data.date.split('-');
      console.log(myArr);
    } else {
      console.log('invalid Date');

    }

    if (!this.checkboxes[0].checked) {
      console.log(this.checkboxes[0].value);
    }
    if (!this.checkboxes[1].checked) {
      console.log(this.checkboxes[1].value);
    }
    if (
      /^[a-z ,.'-]+$/i.test(data.firstname) &&
      /^[a-z ,.'-]+$/i.test(data.lastname) &&
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      ) &&
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password) &&

      /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/i.test(data.date)

    ) {
      //testing all the conditions before sending backend
      let firstname: String = data.firstname;
      let lastname: String = data.lastname;
      let email: String = data.email;
      let password: String = data.password;
      let seller = false;
      let address = data.address;
      if (!this.checkboxes[0].checked) {
        seller = true;
      } else {
        seller = false;
      }
      //Assigning all the new user information to a user model
      let age = this.getAge(myArr);
      this.user.name = firstname + ' ' + lastname;
      this.user.email = email;
      this.user.password = password;
      this.user.seller = seller;
      this.user.age = age;
      this.user.address = address;
      console.log(this.user);
      //HTTP header

      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          user: this.user,
        },
      };
      this.httpClient
        .post('http://localhost:3001/user/', options)
        .subscribe((s) => {
          console.log(s);
        });
    }
  }

  getAge(age: any) {
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    console.log(todayYear + '-' + todayMonth + '-' + todayDate);
    if (age[1] < todayMonth) {

      var currAge = todayYear - age[0];
      console.log('Age:' + currAge);
      return currAge;
    } else if (age[1] == todayMonth) {
      if (todayDate >= age[2]) {
        currAge = todayYear - age[0];
        console.log('Age:' + currAge);
        return currAge;
      } else {
        currAge = todayYear - age[0] - 1;

        console.log('Age:' + currAge);
        return currAge;
      }
    } else if (age[1] > todayMonth) {

      currAge = todayYear - age[0] - 1;

      console.log('Age:' + currAge);
      return currAge;
    } else {
      console.log('error');
      return null;
    }
  }
  ngOnInit(): void {}
}
