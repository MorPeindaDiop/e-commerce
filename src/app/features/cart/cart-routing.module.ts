import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './main/cart.component';
import { SpedizioneComponent } from './spedizione/spedizione.component';

const routes: Routes = [{ path: '', component: CartComponent },
{ path: 'spedizione', component: SpedizioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
