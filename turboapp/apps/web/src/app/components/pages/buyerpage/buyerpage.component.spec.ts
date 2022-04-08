import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerpageComponent } from './buyerpage.component';

describe('BuyerpageComponent', () => {
  let component: BuyerpageComponent;
  let fixture: ComponentFixture<BuyerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
