import { createReducer, on } from "@ngrx/store";
import { langAction } from "./lang.action";

const initialState = "en"

export const langReducer = createReducer(
  initialState,
  on(langAction,(state, action)=> action.lang)
)


