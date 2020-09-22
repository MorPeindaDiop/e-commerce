import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { createSelector, ActionReducerMap } from '@ngrx/store';
import { Sneakers } from '../core/model/sneakers';
import { sneakersReducer, SneakersState } from './sneakers/sneakers.reducers';
import { UsersState, usersReducer } from './users/login.reducers';

export interface AppState {
    usersState: UsersState;
    sneakersState: SneakersState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
    sneakersState: sneakersReducer,
    router: routerReducer,
};