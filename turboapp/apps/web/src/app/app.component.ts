import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoginStatusService } from './services/login-status.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AuthService, LoginStatusService]
})
export class AppComponent  implements AfterViewInit{

  title = 'web';
  constructor(private authService: AuthService, private statusService:LoginStatusService){
    
  }
  ngAfterViewInit(): void {
    //this.statusService.setLoginStatus(this.authService.isAuthenticated());
    this.statusService.setLoginStatus(true);
  }
 
  

}

