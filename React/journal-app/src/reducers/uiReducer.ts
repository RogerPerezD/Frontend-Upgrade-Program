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

export type DispatchTypeUI = (args: UIAction) => UIAction;

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
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            } 
        case types.uiFinishLoading:
        return {
            ...state,
            loading: false
        }    
    
        default:
            return state;
    }
}