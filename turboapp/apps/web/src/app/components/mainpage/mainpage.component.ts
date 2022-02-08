import { Identifiers } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  ngOnInit(): void {

  }
  
  images = [
    'https://img.adaptivereso.com/https://stellarmls-propertyresi.s3.us-west-002.backblazeb2.com/314a10f7-07d4-4d9e-b8ea-be44be55ab35.jpeg/?rwidth=300&rheight=200&type=jpg',
    'https://img.adaptivereso.com/https://stellarmls-propertyresi.s3.us-west-002.backblazeb2.com/cd7c5e85-d528-4d10-a635-ace77aaef77d.jpeg/?rwidth=300&rheight=200&type=jpg',
    'https://img.adaptivereso.com/https://stellarmls-propertyresi.s3.us-west-002.backblazeb2.com/314a10f7-07d4-4d9e-b8ea-be44be55ab35.jpeg/?rwidth=300&rheight=200&type=jpg'
  ];

}
