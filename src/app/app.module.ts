import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './model/auth.service';
import { AboutComponent } from './about/about.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';
import { ShopModule } from './shop/shop.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelModule } from './model/model.module';
import { CartSummaryComponent } from './shop/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartDetailComponent,
    FooterComponent,
    ProductDetailComponent,
    EducationComponent,
    AboutComponent,
    AuthComponent,
    ShopComponent, 
    CartSummaryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    CommonModule,
    FormsModule,
    ShopModule,
    RouterModule.forRoot([
      {path:'auth', component:AuthComponent},
      {path:'shop', component:ShopComponent, loadChildren: () =>import('./shop/shop.module').then((m) => m.ShopModule), canActivate:[AuthGuard]
      },
      {path:'about', component:AboutComponent,canActivate:[AuthGuard]},
      {path:'education', component:EducationComponent,canActivate:[AuthGuard]},
      {path:'productDetail', component:ProductDetailComponent,canActivate:[AuthGuard]},
      {path:'cartDetail', component:CartDetailComponent,canActivate:[AuthGuard]},
      {path:'checkout', component:CheckoutComponent},
        {path:'**', redirectTo:'auth'},
      ])],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent],
  exports:[AuthComponent]
})
export class AppModule { }
