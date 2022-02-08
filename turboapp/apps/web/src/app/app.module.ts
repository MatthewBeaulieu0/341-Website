import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DealsComponent } from './components/deals/deals.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ImageSliderComponent,
    DealsComponent,
    WelcomepageComponent,
    ProductpageComponent,
    FooterComponent,
    Navbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
