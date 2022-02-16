import { types } from '../types/types';
import { uiAction } from '../reducers/uiReducer';

export const openModalAction = () =>{
    return{
        type: types.uiOpenModal
    }
}


export const closeModalAction = ():uiAction =>{
    return{
        type: types.uiCloseModal
    }
}