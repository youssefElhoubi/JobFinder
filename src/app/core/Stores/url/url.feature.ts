import { createFeature, createReducer, on } from "@ngrx/store";
import { url } from "./url.model";
import { urlActions } from "./url.actions";

const urlinitState: url = {
    page: 1,
    perPage: 10,
    search: "",
    country: "",
}

export const urlFeature = createFeature({
    name: "url",
    reducer: createReducer(
        urlinitState,
        on(urlActions.makeURL, (state, { page, perPage, search, country }) => ({
            ...state,
            page,
            perPage,
            search,
            country
        }))
    )
})
export const {
    name,
    reducer,
    selectCountry,
    selectPage,
    selectPerPage,
    selectSearch,
    selectUrlState
} = urlFeature;