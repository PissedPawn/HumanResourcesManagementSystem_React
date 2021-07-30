// all reducers go here


import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import jobPostingReducer from "./reducers/jobPostingReducer";

const rootReducer = combineReducers({
    jobPosting: jobPostingReducer,
    auth: authReducer,
})

export default rootReducer;