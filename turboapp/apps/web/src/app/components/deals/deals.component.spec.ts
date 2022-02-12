import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsComponent } from './deals.component';

describe('DealsComponent', () => {
  let component: DealsComponent;
  let fixture: ComponentFixture<DealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsComponent ]
***REMOVED***
    .compileComponents(***REMOVED***
  }***REMOVED***

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsComponent***REMOVED***
    component = fixture.componentInstance;
    fixture.detectChanges(***REMOVED***
  }***REMOVED***

  it('should create', () => {
    expect(component).toBeTruthy(***REMOVED***
  }***REMOVED***
}***REMOVED***
