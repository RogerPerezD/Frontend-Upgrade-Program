import { types } from '../types/types';

export type uiState = {
    modalOpen: boolean
}

export type uiAction = {
    type: string
}

const initialState: uiState ={
    modalOpen: false
}

export const uiReducer = (state = initialState, action: uiAction): uiState =>{
    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
    
        default:
            return state;
    }
}