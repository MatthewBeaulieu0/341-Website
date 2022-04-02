import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthServiceNewUser } from './auth/auth.service.newUser';
import { frontendUser } from './models/frontendUser';
import { GlobalUserService } from './services/global-user.service';
import { LoginStatusService } from './services/login-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AuthService, LoginStatusService]
})
export class AppComponent  implements AfterViewInit{

  title = 'web';
  user: frontendUser;
  constructor(private authService: AuthService, private statusService:LoginStatusService, private newUserService:AuthServiceNewUser, private globalUserService:GlobalUserService){
    
  }
  async ngAfterViewInit(): Promise<void> {
    //this.statusService.setLoginStatus(this.authService.isAuthenticated());
    this.user= await this.newUserService.isNewUser();
    console.log(this.user + ":D");
    this.globalUserService.setNewUser(this.user);
  }
 
  

}

