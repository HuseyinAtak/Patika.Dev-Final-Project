import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { FooterComponent } from './shop/footer/footer.component';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {path : "shop", component:ShopComponent},
      {path : "cartDetail", component:CartDetailComponent},
      {path : "checkout", component:CheckoutComponent},
      {path : "**", redirectTo:"/shop"}

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
