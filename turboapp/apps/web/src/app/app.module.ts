import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DealsComponent } from './components/deals/deals.component';
<<<<<<< HEAD
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
=======
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';
>>>>>>> e498fd42c790fcb240783929d03525364377fc61

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ImageSliderComponent,
<<<<<<< HEAD
    DealsComponent
    ],
=======
    DealsComponent,
<<<<<<< HEAD
    ShoppingcartComponent
=======
    FeaturedItemsComponent
>>>>>>> e498fd42c790fcb240783929d03525364377fc61
  ],
>>>>>>> 52172e4e405f78e46bd019858113a102e4461953
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
