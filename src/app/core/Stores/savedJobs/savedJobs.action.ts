import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { savedJobs } from "./savedJobs.model";

export const savedJobsAction = createActionGroup({
    source:"saved Jobs",
    events:{
        "add job": props<{job:savedJobs}>(),
        "remove job": props<{id:string}>(),
        "load complate" :props<{jobs:savedJobs[]}>(),
        "jobs count":emptyProps(),
        "load jobs":emptyProps()
    }
})