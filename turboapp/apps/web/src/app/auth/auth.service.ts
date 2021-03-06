import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { frontendUser } from '../models/frontendUser';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  newUser: frontendUser;

  public isAuthenticated(): boolean {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.httpClient
      .post<any>('http://localhost:3001/user/api/session', null, {
        withCredentials: true,
        headers,
      })
      .subscribe(
        (s) => {
          console.log(s);
          this.newUser = s;
        },
        (error) => {
          return false;
        }
      );
    if (!this.newUser) {
      return false;
    } else {
      return true;
    }
  }
}
