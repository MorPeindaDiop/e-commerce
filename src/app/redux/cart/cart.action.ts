import { createAction, props } from '@ngrx/store';
import { CustomSneakers } from 'src/app/core/model/customSneakers';

export const retrieveAllCart = createAction('[Cart] retrieve all');
export const initCart = createAction('[Cart] init', props<{customSneakers: CustomSneakers[]}>());

export const addItem = createAction('[Cart] add item', props<{customSneakers: CustomSneakers}>());
export const addItemSuccess = createAction('[Cart] add item success', props<{customSneakers: CustomSneakers}>());

export const removeItem = createAction('[Cart] remove item', props<{id: number}>());
export const removeItemSuccess = createAction('[Cart] remove item', props<{id: number}>());
// export const removeItem = createAction('[Cart] remove item', props<{userId: number, customProduct: CustomProduct}>());
// export const removeItemSuccess = createAction('[Cart] remove item', props<{userId: number, customProduct: CustomProduct}>());

export const removeAllItem = createAction('[Cart] remove all item');