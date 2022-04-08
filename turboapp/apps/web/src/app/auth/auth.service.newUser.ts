import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, map, Observable } from 'rxjs';
import { frontendUser } from '../models/frontendUser';

@Injectable({ providedIn: 'root' })
export class AuthServiceNewUser {
  constructor(private httpClient: HttpClient, private router: Router) {}
  newUser: frontendUser;
  
  public async isNewUser(): Promise<frontendUser> {
    const newUser2 = this.getNewUser();
    this.newUser = await lastValueFrom(newUser2);
    if (!this.newUser) {
      console.log("null");
      return null;
    } else {
      console.log( "new_user: " + this.newUser);
      return this.newUser;
    }
  }

    public getNewUser(): Observable<frontendUser>{


      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.httpClient
        .post<frontendUser>('http://localhost:3001/user/api/session', null, {
          withCredentials: true,
          headers,
        })
        .pipe(
          map(response => response)
        );
    }
  }


