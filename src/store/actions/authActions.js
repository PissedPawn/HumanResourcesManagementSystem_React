
export const Log_In = "Log In"
export function login(condition) {
    return {
        type: Log_In,
        payload: condition
    }
}

export const Log_Out = "Log Out"
export function logout(condition) {
    return {
        type: Log_Out,
        payload: condition
    }
}