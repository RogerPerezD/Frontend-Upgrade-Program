import { types } from '../types/types';

export type UserState = {
    uid: string,
    name: string
}

export type UserAction = {
    type: string,
    payload: UserState
}

export type DispatchType = (args: UserAction) => UserAction;

export const authReducer = ( state = {} as UserState, action: UserAction ) =>{
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            };
        case types.logout:
            return {};
    
        default:
            return state;
    }
}