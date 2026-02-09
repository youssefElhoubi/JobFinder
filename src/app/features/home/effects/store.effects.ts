import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StoreActions } from '../actions/store.actions';


@Injectable()
export class StoreEffects {

  ggStores$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StoreActions.ggStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StoreActions.ggStoresSuccess({ data })),
          catchError(error => of(StoreActions.ggStoresFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
