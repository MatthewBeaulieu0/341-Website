import { Injectable } from '@angular/core';
import { frontendUser } from '../models/frontendUser';

@Injectable({
  providedIn: 'root'
})
export class GlobalUserService {

  newUser: frontendUser;
  getNewUser(){
    return this.newUser;
  }
  setLoginStatus(newUser: frontendUser){
    this.newUser = newUser;
  }
  constructor() { }
}
