export const POST_JOB = "POST_JOB"
export const REMOVE_JOB = "REMOVE_JOB"


export function postJob(jobPosting) {
    return {
        type: POST_JOB,
        payload: jobPosting
    }
}

export function removeJob(jobPosting) {
    return {
        type: REMOVE_JOB,
        payload: jobPosting
    }
}