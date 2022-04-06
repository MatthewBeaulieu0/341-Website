import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/pages/mainpage/mainpage.component';
import { ProductaisleComponent } from './components/pages/productaisle/productaisle.component';
import { ProductpageComponent } from './components/pages/productpage/productpage.component';
import { ShoppingcartComponent } from './components/pages/shoppingcart/shoppingcart.component';
import { WelcomepageComponent } from './components/pages/welcomepage/welcomepage.component';
import { SignuppageComponent } from './components/pages/signuppage/signuppage.component';
import { LoginpageComponent } from './components/pages/loginpage/loginpage.component';
import { CheckoutpageComponent } from './components/pages/checkoutpage/checkoutpage.component';
import { BuyerpageComponent } from './components/pages/buyerpage/buyerpage.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'welcomepage', component: WelcomepageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'searchpage', component: SearchPageComponent},

  {
    path: 'shoppingcart',
    component: ShoppingcartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'buyerpage',
    component: BuyerpageComponent,
    //canActivate: [AuthGuard],
  },

  { path: 'aislepage', component: ProductaisleComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'checkoutpage', component: CheckoutpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
