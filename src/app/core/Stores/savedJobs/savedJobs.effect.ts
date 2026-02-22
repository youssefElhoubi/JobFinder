import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SavedJobs } from "../../services/job/saved-jobs";
import { savedJobsAction } from "./savedJobs.action";
import { map, switchMap } from "rxjs";

export const savedJobsEffect = createEffect((
    action$ = inject(Actions), savedJobService = inject(SavedJobs),
) => {
    return action$.pipe(
        ofType(savedJobsAction.loadJobs),
        switchMap(() => {
            const user = JSON.parse(localStorage.getItem("user") || "null")
            return savedJobService.getUsersavedJobs(user).pipe(
                map((data) => savedJobsAction.loadComplate({ jobs: data }))
            );
        })

    )
}, { functional: true })

export const removeJobEffect = createEffect((
    action$ = inject(Actions), savedJobService = inject(SavedJobs),
)=>{
    return action$.pipe(
        ofType(savedJobsAction.removeJob),
        switchMap(({id})=>{
            return savedJobService.deleteSavedJob(id).pipe(
                map(() => savedJobsAction.loadJobs())
            );
        })
    )
}, { functional: true })