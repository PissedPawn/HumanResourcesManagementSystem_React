import { POST_JOB, REMOVE_JOB } from "../actions/jobPostingActions";
import { jobPostings } from "../initialValues/jobPostings";

const initialState =
{
    jobPostings: jobPostings
}


export default function jobPostingReducer(state = initialState, { type, payload }) {

    switch (type) {
        case POST_JOB:


            let jobPosting = state.jobPostings.find(j => j.jobPosting.id === payload.id);

            if (jobPosting) {

                return {
                    state
                }
            }
            else {

                return {
                    ...state,
                    jobPostings: [...state.jobPostings, { quantity: 1, jobPosting: payload }]
                }
            }


        case REMOVE_JOB:

            return {
                ...state,
                jobPostings: state.jobPostings.filter(j => j.jobPosting.id !== payload.id)
            }

        default:
            return state;
    }
}