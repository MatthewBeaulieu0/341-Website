import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  loginStatus: boolean;

  getLoginStatus(){
    return this.loginStatus;
  }

  setLoginStatus(status:boolean){
      this.loginStatus = status;
  }
  constructor() { }

  
}
