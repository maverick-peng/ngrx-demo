import { Action, createAction, props } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export const loadPizzas = createAction(LOAD_PIZZAS);
export const loadPizzasFail = createAction(LOAD_PIZZAS_FAIL, props<any>());
export const loadPizzasSuccess = createAction(
  LOAD_PIZZAS_SUCCESS,
  props<{ pizzas: Pizza[] }>()
);

/* old syntax */

// export class LoadPizzas implements Action {
//   readonly type = LOAD_PIZZAS;
// }

// export class LoadPizzasFail implements Action {
//   readonly type = LOAD_PIZZAS_FAIL;
//   constructor(public payload: any) {}
// }

// export class LoadPizzasSuccess implements Action {
//   readonly type = LOAD_PIZZAS_SUCCESS;
//   constructor(public payload: Pizza[]) {}
// }

// export type LoadPizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
