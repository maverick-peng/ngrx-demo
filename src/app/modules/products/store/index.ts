import { EntityState } from '@ngrx/entity';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromPizzas from './reducers/pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.State;
}

export const reducers: ActionReducerMap<any> = {
  pizzas: fromPizzas.reducer,
};

// export interface ProductsState {
//   pizzas: fromPizzas.State;
// }

// export const reducers: ActionReducerMap<
//   ProductsState,
//   fromPizzas.LoadPizzasActions // eliminate imcompatible type complaining
// > = {
//   pizzas: fromPizzas.reducer,
// };

export const getProductsState =
  createFeatureSelector<ProductsState>('products');

// Pizza Selector
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzasState,
  fromPizzas.selectAll
);

export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoading
);

export * from './actions';
