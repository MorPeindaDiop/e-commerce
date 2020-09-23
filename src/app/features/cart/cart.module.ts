import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './main/cart.component';
import { SpedizioneComponent } from './spedizione/spedizione.component';


@NgModule({
  declarations: [CartComponent, SpedizioneComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
