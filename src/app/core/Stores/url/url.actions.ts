import { createActionGroup, props } from "@ngrx/store";
import { url } from "./url.model";

export const urlActions = createActionGroup({
    source: "url",
    events: {
        "make URL": props<url>()
    }
})