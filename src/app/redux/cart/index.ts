import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectRouteParams } from '../router';
import { CartState } from './cart.reducers';


export const selectCartState = (state: AppState) => state.cartState;

export const getCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.cart
);

// export const getCartProductsByUser = createSelector(
//     selectCartState,
//     (state: CartState, props: {userId: number}) => {
//         return state.cart.filter(user => user.userId === props.userId)
//     }
// );

export const getNumeroProdotti = createSelector (
    selectCartState,
    (state: CartState) => state.cart.length
);

export const getTotaleCarrello = createSelector(
    selectCartState,
    (state: CartState) => {
        return state.cart.reduce((total, current, idx) => total += current.sneakers.price, 0);
    }
);

export const getCurrentNavigatedCart = createSelector(
    selectCartState,
    selectRouteParams,
    (state: CartState, params: Params) => state.cart.filter(item => item.userId === Number(params['id']))
);