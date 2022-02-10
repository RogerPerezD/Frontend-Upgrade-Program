import { types } from '../types/types';

export type UserState = {
    uid: string,
    name: string
}

export type UserAction = {
    type: string,
    payload?: UserState
}

export type DispatchTypeUser = (args: UserAction) => UserAction;

export const authReducer = ( state = {} as UserState, action: UserAction ): UserState =>{
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload?.uid as string,
                name: action.payload?.name as string
            };
        case types.logout:
            return {} as UserState;
    
        default:
            return state;
    }
}