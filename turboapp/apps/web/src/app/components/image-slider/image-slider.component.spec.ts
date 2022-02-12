import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderComponent } from './image-slider.component';

describe('ImageSliderComponent', () => {
  let component: ImageSliderComponent;
  let fixture: ComponentFixture<ImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSliderComponent ]
***REMOVED***
    .compileComponents(***REMOVED***
  }***REMOVED***

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSliderComponent***REMOVED***
    component = fixture.componentInstance;
    fixture.detectChanges(***REMOVED***
  }***REMOVED***

  it('should create', () => {
    expect(component).toBeTruthy(***REMOVED***
  }***REMOVED***
}***REMOVED***
