import { types } from '../types/types';

export type UIState = {
    loading: boolean,
    msgError: string
}

export type  UIAction = {
    type: string,
    payload?: string
}

const initialState: UIState = {
    loading: false,
    msgError: ''
}

export const uiReducer = ( state = initialState, action: UIAction) =>{

    switch ( action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: ''
            }    
    
        default:
            return state;
    }
}