import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './navbar/navbar.component';
import { ChickenComponent } from './chicken/chicken.component';
import { HiddennavComponent } from './hiddennav/hiddennav.component';
import { LoginComponent } from './login/login.component';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CdelivaryComponent } from './cdelivary/cdelivary.component';
import { CtakeawayComponent } from './ctakeaway/ctakeaway.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BurgersComponent } from './burgers/burgers.component';
import { RicebowlComponent } from './ricebowl/ricebowl.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { SnacksComponent } from './snacks/snacks.component';
import { Chicken1Component } from './chicken1/chicken1.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChickenComponent,
    HiddennavComponent,
    LoginComponent,
    OfferComponent,
    MenuComponent,
    SignupComponent,
    CartComponent,
    CdelivaryComponent,
    CtakeawayComponent,
    BurgersComponent,
    RicebowlComponent,
    BeveragesComponent,
    SnacksComponent,
    Chicken1Component,
    FooterComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
