// all reducers go here


import { combineReducers } from "redux";
import jobPostingReducer from "./reducers/jobPostingReducer";

const rootReducer = combineReducers({
    jobPosting: jobPostingReducer
})

export default rootReducer;