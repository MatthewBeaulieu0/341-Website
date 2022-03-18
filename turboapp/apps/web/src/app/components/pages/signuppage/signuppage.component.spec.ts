import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppageComponent } from './signuppage.component';

describe('SignuppageComponent', () => {
  let component: SignuppageComponent;
  let fixture: ComponentFixture<SignuppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignuppageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  checkboxes = [
    { checked: false, value: 'yes' },
    { checked: false, value: 'no' },
  ];

  disableOther(chk) {
    this.checkboxes.forEach((x) => {
      if (x.value !== chk.value) {
        x.checked = !x.checked;
      }
    });
  }
}
