import { Action, createReducer, on } from '@ngrx/store';
import { CustomSneakers } from 'src/app/core/model/customSneakers';

import { addItem, addItemSuccess, initCart, removeAllItem, removeItem, removeItemSuccess } from './cart.action';

export interface CartState {
    cart: CustomSneakers[];
}

export const initialState: CartState = {
    cart: []
};

export const cartReducer = createReducer(
    initialState,
    on(initCart, (state, { customSneakers }) => ({ ...state, cart:  customSneakers})),
    on(addItem, (state, {customSneakers}) => ({...state, products:[...state.cart, customSneakers]})),
    on(removeItem,(state, {id}) => ({ ...state, products:state.cart.filter(item=>item.sneakers.id !== id) })),
    on(removeAllItem, (state) => ({...state, cart: []})),
);

export function reducer(state: CartState, action: Action) {
    return cartReducer(state, action);
}
