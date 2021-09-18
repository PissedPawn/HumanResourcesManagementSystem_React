import {
    Log_In,
    Log_Out
} from "../actions/authActions";
import {
    auth
} from "../initialValues/auth";
import {
    useState,
    useEffect
} from "react";


const initialState = {
    auth: auth,
}

export default function authReducer(state = initialState, {
    type,
    payload
}) {


    switch (type) {
        case Log_In:

            if (payload) {

                return {
                    ...state,
                    auth: {
                        ...auth,
                        loggedIn: true
                    }

                };

            } else {
                return {
                    ...state,
                    auth: {
                        ...auth,
                        loggedIn: false
                    }
                };
            }



        case Log_Out:

            break;


        default:


            return {
                ...state,
                auth: {
                    ...auth,
                    loggedIn: false
                }
            };

    }
}