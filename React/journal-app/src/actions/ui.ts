import { types } from '../types/types';
import { UIAction } from '../reducers/uiReducer';

export const setError = ( err: string ): UIAction=>{
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const removeError = (): UIAction=>{
    return {
        type: types.uiRemoveError
    }
}