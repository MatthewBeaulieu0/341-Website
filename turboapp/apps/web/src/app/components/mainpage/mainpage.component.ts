import { Identifiers } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  routeToShoppingCart(){
    this.router.navigate(['/shoppingcart']);
  }


}
