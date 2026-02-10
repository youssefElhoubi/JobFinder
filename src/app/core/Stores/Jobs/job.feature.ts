import { createFeature, createReducer, on } from "@ngrx/store";
import { JobsState } from "./jobs.model";
import { JobActions } from "./jobs.actions";

const initialState: JobsState = {
    jobs: [],
    loading: false,
    error: ""
}

export const JobFeature= createFeature({
    name:"job",
    reducer:createReducer(
        initialState,
        on(JobActions.initLoading,(state)=>({
            ...state,
            loading:true,
            error:""
        })),
        on(JobActions.loadingSuccess,(state,{jobs})=>({
            ...state,
            jobs,
            loading:false
        })),
        on(JobActions.loadingFailure,(state,{error})=>({
            ...state,
            error
        }))
    )
})

export const {name,reducer,selectError,selectJobState,selectJobs,selectLoading} = JobFeature