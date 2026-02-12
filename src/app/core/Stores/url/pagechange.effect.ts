import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { urlActions } from "./url.actions";
import { catchError, map, of, startWith, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectUrlState } from "./url.feature";
import { JobService } from "../../services/job/jobService";
import { JobActions } from "../Jobs/jobs.actions";

export const pagechangeEffect = createEffect(
    (action$ = inject(Actions), store = inject(Store), jobService = inject(JobService)) => {
        return action$.pipe(
            ofType(urlActions.changePage),
            withLatestFrom(store.select(selectUrlState)),
            switchMap(([{ perPage }, url]) => {
                return jobService.fetchJobs(url.country, url.page, url.search, perPage).pipe(
                    map(jobs => JobActions.loadingSuccess({ jobs })),
                    catchError((error) =>
                        of(JobActions.loadingFailure({ error: error.message }))
                    ),
                    startWith(JobActions.initLoading())
                )
            })
        )
    }, { functional: true }
);