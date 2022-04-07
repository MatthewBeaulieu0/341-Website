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
  setNewUser(newUser: frontendUser){
    this.newUser = newUser;
  }
  constructor() { }
  destroyUser(){
    this.newUser = null;
  }
}
