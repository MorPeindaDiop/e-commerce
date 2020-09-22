import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, filter, find } from 'rxjs/operators';

import { Action, select, Store } from '@ngrx/store';

import { addItem, addItemSuccess, initCart, removeItem, removeItemSuccess, retrieveAllCart } from './cart.action';
import { getCurrentUser } from '../users';
import { getCartProducts, selectCartState } from '.';
import { CustomSneakers } from 'src/app/core/model/customSneakers';
import { HttpCommunicationsService } from 'src/app/core/HttpCommunications/http-communications.service';

@Injectable()
export class CartEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private store: Store, private router: Router){}

    retreiveCart():Observable<CustomSneakers[]>{
        return this.http.retrieveGetCall<CustomSneakers[]>("cart")
    }

    // registerCustomProduct(prodotto: Products, chiusura: string, numero: string, testo?: string, coloretesto?: string): Observable<CustomProduct>{
    //     return this.http.retrievePostCall<CustomProduct>("customProducts",{prodotto, chiusura, numero, testo, coloretesto})
    // }
     
    //  formatCustomProduct(customProduct: CustomProduct): CustomProduct{
    //      return {prodotto: customProduct.prodotto, chiusura: customProduct.chiusura, numero: customProduct.numero, testo: customProduct.testo, coloretesto: customProduct.coloretesto} as CustomProduct;
    //  }

    getCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCart),
        withLatestFrom(this.store.pipe(select(getCurrentUser)), this.store.pipe(select(selectCartState))),
        switchMap(() => this.retreiveCart().pipe(
            map((customSneakers) => initCart({customSneakers}))
        ))
    ));

    addToCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(addItem),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        switchMap(([action, user]) => this.http.retrievePostCall("cart", {
            "userId": user.id,
            "prodotto": action.customSneakers.brand,
            
            "color": action.customSneakers.color
        }).pipe(
            map((customSneakers: CustomSneakers) => addItemSuccess({customSneakers: customSneakers}))
        ))
    ));
}