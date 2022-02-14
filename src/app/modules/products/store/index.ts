import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromPizzas from './reducers/pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzasState;
}

export const reducers: ActionReducerMap<
  ProductsState,
  fromPizzas.LoadPizzasActions // eliminate imcompatible type complaining
> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState =
  createFeatureSelector<ProductsState>('products');

// Pizza Selector
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzasState,
  fromPizzas.getPizzas
);

export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoading
);
