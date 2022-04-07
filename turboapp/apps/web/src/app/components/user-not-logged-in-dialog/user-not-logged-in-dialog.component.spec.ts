import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotLoggedInDialogComponent } from './user-not-logged-in-dialog.component';

describe('UserNotLoggedInDialogComponent', () => {
  let component: UserNotLoggedInDialogComponent;
  let fixture: ComponentFixture<UserNotLoggedInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotLoggedInDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotLoggedInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
