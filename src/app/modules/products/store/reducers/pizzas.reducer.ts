import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Pizza } from '../../models/pizza.model';

import * as fromPizza from '../actions/pizzas.action';

const adapter = createEntityAdapter<Pizza>();

export interface State extends EntityState<Pizza> {
  // additional props for indicating load status
  loaded: boolean;
  loading: boolean;
}

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(fromPizza.loadPizzas, (state) => {
    return { ...state, loading: true };
  }),
  on(fromPizza.loadPizzasSuccess, (state, { pizzas }) => {
    return adapter.setAll(pizzas, { ...state, loaded: true, loading: false });
  }),
  on(fromPizza.loadPizzasFail, (state) => {
    return { ...state, loaded: false, loading: false };
  })
);

/* Old syntax */

// export interface PizzasState {
//   data: Pizza[];
//   loaded: boolean;
//   loading: boolean;
// }

// export const initialState: PizzasState = {
//   data: [],
//   loaded: false,
//   loading: false,
// };

// export function reducer(
//   state = initialState,
//   action: fromPizza.LoadPizzasActions
// ) {
//   switch (action.type) {
//     case fromPizza.LOAD_PIZZAS: {
//       return {
//         ...state,
//         loading: true,
//       };
//     }
//     case fromPizza.LOAD_PIZZAS_FAIL: {
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//       };
//     }
//     case fromPizza.LOAD_PIZZAS_SUCCESS: {
//       const data = action.payload;

//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         data
//       };
//     }
//   }

//   return state;
// }

// export * from '../actions/pizzas.action';

// // Pizzas Selectors
export const getPizzasLoaded = (state: State) => state.loaded;
export const getPizzasLoading = (state: State) => state.loading;
// export const getPizzas = (state: PizzasState) => state.data;

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
