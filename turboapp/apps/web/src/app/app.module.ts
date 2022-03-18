import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DealsComponent } from './components/deals/deals.component';
import { ShoppingcartComponent } from './components/pages/shoppingcart/shoppingcart.component';
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';
import { WelcomepageComponent } from './components/pages/welcomepage/welcomepage.component';
import { ProductpageComponent } from './components/pages/productpage/productpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { SignuppageComponent } from './components/pages/signuppage/signuppage.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductaisleComponent } from './components/pages/productaisle/productaisle.component';

import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';

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
    FooterComponent,
    Navbar1Component,
    SignuppageComponent,
    HeaderComponent,
    ProductaisleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule],
  providers: [CartService, ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
