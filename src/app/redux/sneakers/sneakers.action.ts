import { createAction, props } from '@ngrx/store';
import { Sneakers } from 'src/app/core/model/sneakers';

//prendi tutti i prodotti
export const retrieveAllProducts = createAction('[Sneakers] tutti i modelli');
export const initProduct = createAction('[Sneakers] sneakers', props<{sneakers: Sneakers[]}>());