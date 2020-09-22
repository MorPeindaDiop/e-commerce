import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store) { }

  // getCartByUser(userId: number) {
  //   this.store.pipe(select(getCartProductsByUser, {id: userId}));

  // }

}