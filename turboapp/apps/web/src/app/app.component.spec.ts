import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
***REMOVED***.compileComponents(***REMOVED***
  }***REMOVED***

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent***REMOVED***
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(***REMOVED***
  }***REMOVED***

  it(`should have as title 'web'`, () => {
    const fixture = TestBed.createComponent(AppComponent***REMOVED***
    const app = fixture.componentInstance;
    expect(app.title).toEqual('web'***REMOVED***
  }***REMOVED***

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent***REMOVED***
    fixture.detectChanges(***REMOVED***
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('web app is running!'***REMOVED***
  }***REMOVED***
}***REMOVED***
