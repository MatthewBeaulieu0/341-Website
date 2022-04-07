import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-not-logged-in-dialog',
  templateUrl: './user-not-logged-in-dialog.component.html',
  styleUrls: ['./user-not-logged-in-dialog.component.css']
})
export class UserNotLoggedInDialogComponent implements OnInit {

  constructor(private router: Router,
    private activeModalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  routeToSignUpPage(){
    this.router.navigate(['/login']);
    this.activeModalService.close();
  }

}
