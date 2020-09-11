import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { UsersState } from './login.reducers';

export const selectUsersState = (state: AppState) => state.usersState;
export const getCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
);