import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedItemsComponent } from './featured-items.component';

describe('FeaturedItemsComponent', () => {
  let component: FeaturedItemsComponent;
  let fixture: ComponentFixture<FeaturedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedItemsComponent ]
***REMOVED***
    .compileComponents(***REMOVED***
  }***REMOVED***

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedItemsComponent***REMOVED***
    component = fixture.componentInstance;
    fixture.detectChanges(***REMOVED***
  }***REMOVED***

  it('should create', () => {
    expect(component).toBeTruthy(***REMOVED***
  }***REMOVED***
}***REMOVED***
