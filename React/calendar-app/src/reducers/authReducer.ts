import { types } from '../types/types';

export interface User{
    uid: string;
    name: string;
}


type AuthState = {
    checking: boolean,
    user?: User
}

type AuthAction = {
    type: string,
    payload?: User
}

export type DispatchAuth = (args: AuthAction) => AuthAction;

const initialState: AuthState = {
    checking: true,
}

export const authReducer = ( state = initialState, action: AuthAction): AuthState =>{
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                user: {...action.payload as User}
            }
        case types.authStartRegister:
            return {
                ...state,
                checking: false,
                user: {...action.payload as User}
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            }
        default:
            return state;
    }
}