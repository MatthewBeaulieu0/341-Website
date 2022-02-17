import { Component, Input, OnInit } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent {
  @Input() images: string[];

  slideIndex: number = 0;

  repeat() {
    setInterval(() => {
      this.plusSlides(this.slideIndex);
      this.repeat();
    }, 2000);
    console.log('repeated');
  }

  plusSlides(n: number) {
    this.slideIndex += n;
    repeat();
    console.log('next image');
  }
}
