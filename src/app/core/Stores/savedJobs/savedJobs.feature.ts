import { createFeature, createReducer, on } from "@ngrx/store"
import { savedJobsAction } from "./savedJobs.action"
import { savedJobs } from "./savedJobs.model"

type jobstype = {
    loading: boolean,
    savedjobs: savedJobs[],
    count: number
}


const initialState: jobstype = {
    loading: false,
    savedjobs: [],
    count: 0
}

export const savedJobsFeature = createFeature({
    name: "saved jobs feature",
    reducer: createReducer(
        initialState,
        on(savedJobsAction.loadComplate, (state, { jobs }) => ({
            ...state,
            savedjobs: jobs
        })),
        on(savedJobsAction.loadJobs, (state) => ({
            ...state,
        })),
        on(savedJobsAction.addJob, (state, { job }) => ({
            ...state,
            savedjobs: [...state.savedjobs, job],
            count: state.savedjobs.length + 1
        })),
        on(savedJobsAction.removeJob,(state,{id}) => ({
            ...state,
            savedjobs:[...state.savedjobs.filter(j=>j.id!=id)],
            count: state.savedjobs.length - 1
        })),
        on(savedJobsAction.jobsCount,(state,) => ({
            ...state,
            count: state.savedjobs.length - 1
        }))
    )
})

export const {reducer,selectCount,selectLoading,selectSavedjobs} = savedJobsFeature