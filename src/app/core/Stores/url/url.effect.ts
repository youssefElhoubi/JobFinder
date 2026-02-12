import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobService } from "../../services/job/jobService";
import { urlActions } from "./url.actions";
import { catchError, map, of, startWith, switchMap } from "rxjs";
import { JobActions } from "../Jobs/jobs.actions";

export const urlEffect = createEffect(
    (actions$ = inject(Actions), jobservice = inject(JobService)) => {        
        return actions$.pipe(
            ofType(urlActions.makeURL),
            switchMap(({ country, page, search, perPage }) =>
                jobservice.fetchJobs(country, page, search, perPage).pipe(
                    map((jobs) => JobActions.loadingSuccess({ jobs })),
                    catchError((error) =>
                        of(JobActions.loadingFailure({ error: error.message }))
                    ),
                    startWith(JobActions.initLoading())
                )
            )
        );
    },
    { functional: true }
)