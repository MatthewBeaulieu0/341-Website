import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaisleComponent } from './productaisle.component';

describe('ProductaisleComponent', () => {
  let component: ProductaisleComponent;
  let fixture: ComponentFixture<ProductaisleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaisleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
