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

export const startLoading = (): UIAction =>{
    return {
        type: types.uiStartLoading
    }
}

export const finishLoading = (): UIAction =>{
    return {
        type: types.uiFinishLoading
    }
}

// export {
//     removeError,
//     startLoading,
//     finishLoading
// }