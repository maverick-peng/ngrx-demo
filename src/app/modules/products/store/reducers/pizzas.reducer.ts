import { Pizza } from '../../models/pizza.model';

import * as fromPizza from '../actions/pizzas.action';

export interface PizzasState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzasState = {
  data: [
    {
      name: 'Hawaii',
      id: 5,
      toppings: [
        {
          name: 'sausage',
          id: 6,
        },
        {
          name: 'pineapple',
          id: 8,
        },
        { name: 'cheese', id: 1 },
      ],
    },
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizza.LoadPizzasActions
) {
  switch (action.type) {
    case fromPizza.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromPizza.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromPizza.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
  }

  return state;
}

export * from '../actions/pizzas.action';

// Pizzas Selectors
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzas = (state: PizzasState) => state.data;
