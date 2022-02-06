import { Component, Input, OnInit } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() images: string[];

  slideIndex: number = 0;

  repeat() {
    setInterval(() => {
      this.plusSlides(this.slideIndex***REMOVED***
      this.repeat(***REMOVED***
    }, 2000***REMOVED***
    console.log("repeated"***REMOVED***
  }

  plusSlides(n: number) {
    this.slideIndex += n;
    repeat(***REMOVED***
    console.log("next image"***REMOVED***
  }
}
