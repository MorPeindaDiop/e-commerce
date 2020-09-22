import { Action, createReducer, on } from '@ngrx/store';
import { Sneakers } from 'src/app/core/model/sneakers';
import { initProduct } from './sneakers.action';

export interface SneakersState {
    sneakers: Sneakers[];
}

export const initialState: SneakersState = {

    sneakers: JSON.parse(sessionStorage.getItem("sneakers"))
};

export const sneakersReducer = createReducer(
    initialState,
    on(initProduct, (state, { sneakers }) => ( { ...state, sneakers: sneakers } )),
);

export function reducer(state: SneakersState | undefined, action: Action) {
    return sneakersReducer(state, action);
}