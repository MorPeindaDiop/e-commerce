import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomSneakers } from 'src/app/core/model/customSneakers';

import { addItem } from 'src/app/redux/cart/cart.action';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private store: Store) { }

  createCustomProduct() {
    
  }

  addToCart(customSneakers: CustomSneakers) {
    this.store.dispatch(addItem({customSneakers}))
  }
}