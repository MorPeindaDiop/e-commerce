  
import { Params } from '@angular/router';
import { createSelector, props } from '@ngrx/store';
import { distinct } from 'rxjs/operators';
import { Sneakers } from 'src/app/core/model/sneakers';



import { AppState } from '..';
import { selectRouteParams } from '../router';

import { SneakersState } from './sneakers.reducers';

export const selectSneakersState = (state: AppState) => state.sneakersState;

export const selectSneakers = createSelector(
    selectSneakersState,
    (state: SneakersState) => state.sneakers
);

export const selectSneakersByBrand = createSelector(
    selectSneakersState,
    selectRouteParams,
    (state: SneakersState, params: Params)=> {
        return state.sneakers.find(sneakers => sneakers.brand === (params['brand']));
    }
);

export const getCurrentNavigatedSneakers = createSelector(
    selectSneakersState,
    selectRouteParams,
    (state: SneakersState, params: Params) => state.sneakers.find(item => item.id === Number(params['id']))
);