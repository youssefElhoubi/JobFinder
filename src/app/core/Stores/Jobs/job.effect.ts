import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { JobService } from "../../services/job/jobService";
import { JobActions } from "./jobs.actions";
import { catchError, map, of, switchMap } from "rxjs";

export const JobEffect = createEffect(
    (actions$ = inject(Actions), jobservice = inject(JobService)) => {
        return actions$.pipe(
            ofType(JobActions.initLoading),
            switchMap(({ country, page, search, perpage }) =>
                jobservice.fetchJobs(country, page, search, perpage).pipe(
                    map((jobs) => JobActions.loadingSuccess({ jobs })),
                    catchError((error) =>
                        of(JobActions.loadingFailure({ error: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
)