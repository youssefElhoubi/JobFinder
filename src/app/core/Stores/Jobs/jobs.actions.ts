import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Jobs } from "./jobs.model";


export const JobActions = createActionGroup({
    source: "jobs",
    events: {
        "init Loading": props<{ country: string, page: number, search: string | null, perpage: number }>(),
        "Loading Success": props<{ jobs: Jobs }>(),
        "Loading Failure": props<{ error: string }>(),
    }
})