import { createSelector, ActionReducerMap } from '@ngrx/store';
import { UsersState, usersReducer } from './users/login.reducers';

export interface AppState {
    usersState: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
};