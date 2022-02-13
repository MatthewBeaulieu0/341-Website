import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DealsComponent } from './components/deals/deals.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ImageSliderComponent,
    DealsComponent,
    ShoppingcartComponent,
    FeaturedItemsComponent,
    WelcomepageComponent,
    ProductpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
