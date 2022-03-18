import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { ProductaisleComponent } from './components/pages/productaisle/productaisle.component';
import { ProductpageComponent } from './components/pages/productpage/productpage.component';
import { ShoppingcartComponent } from './components/pages/shoppingcart/shoppingcart.component';
import { WelcomepageComponent } from './components/pages/welcomepage/welcomepage.component';

const routes: Routes = [
  {path: "", redirectTo: "welcomepage", pathMatch: "full"},
  {path: "mainpage", component: MainpageComponent},
  {path: "welcomepage", component: WelcomepageComponent},
  {path: "productpage", component: ProductpageComponent},
  {path: "shoppingcart", component: ShoppingcartComponent},
  {path: "aislepage", component: ProductaisleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
