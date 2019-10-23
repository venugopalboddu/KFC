import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { CdelivaryComponent } from './cdelivary/cdelivary.component';
import { CtakeawayComponent } from './ctakeaway/ctakeaway.component';
import { CartComponent } from './cart/cart.component';
import { Chicken1Component } from './chicken1/chicken1.component';
import { BurgersComponent } from './burgers/burgers.component';
import { RicebowlComponent } from './ricebowl/ricebowl.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'offers' ,component:OfferComponent},
  {path:'menu' ,component:MenuComponent},
  {path:'' ,component:MenuComponent},
  {path:'forgot' ,component:ForgotComponent},
  {path:'reset' ,component:ResetComponent},
  {path:'reset/:id' ,component:ResetComponent},
  {path:'burgers' ,component: BurgersComponent},
  {path:'ricebowl' ,component: RicebowlComponent },
  {path:'snacks' ,component: SnacksComponent },
  {path:'beverages' ,component: BeveragesComponent },
  {path:'signup' ,component:SignupComponent},
  {path:'chicken1' ,component:Chicken1Component},
  {path:"cart",component:CartComponent,
  children:
  [{path:"delivary",component:CdelivaryComponent},
  {path:"takeaway",component:CtakeawayComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
