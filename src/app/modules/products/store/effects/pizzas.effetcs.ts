import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services/pizzas.service';

@Injectable()
export class PizzasEffetcs {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PizzaActions.LOAD_PIZZAS),
      switchMap(() => {
        return this.pizzaService.loadPizzas().pipe(
          map((pizzas) => PizzaActions.loadPizzasSuccess({ pizzas })),
          catchError((err) => of(PizzaActions.loadPizzasFail(err)))
        );
      })
    )
  );

  /* old syntax */

  // loadPizzas$ = createEffect(() => this.actions$.pipe(
  //   ofType(PizzaActions.LOAD_PIZZAS),
  //   switchMap(() => {
  //     return this.pizzaService.loadPizzas().pipe(
  //       map(pizzas => new PizzaActions.LoadPizzasSuccess(pizzas)),
  //       catchError(err => of(new PizzaActions.LoadPizzasFail(err)))
  //     )
  //   })
  // ))
}
