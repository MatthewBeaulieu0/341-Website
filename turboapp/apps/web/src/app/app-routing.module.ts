import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { ProductpageComponent } from './components/pages/productpage/productpage.component';
import { ShoppingcartComponent } from './components/pages/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path: "", redirectTo: "mainpage", pathMatch: "full"},
  {path: "mainpage", component: MainpageComponent},
  {path: "productpage", component: ProductpageComponent},
  {path: "shoppingcart", component: ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
