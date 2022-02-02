import { types } from "../types/types";

export type UserState = { logged: boolean, name?: string }

export type ActionReducer = {
    type: string,
    payload?: UserState
}

export const authReducer = ( state: UserState, action: ActionReducer):UserState =>{
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            };
        default:
            return state;
    }
}