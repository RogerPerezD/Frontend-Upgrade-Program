import { types } from '../types/types';
import { UIAction } from '../reducers/uiReducer';

const setError = ( err: string ): UIAction=>{
    return {
        type: types.uiSetError,
        payload: err
    }
}

const removeError = (): UIAction=>{
    return {
        type: types.uiRemoveError
    }
}

const startLoading = (): UIAction =>{
    return {
        type: types.uiStartLoading
    }
}

const finishLoading = (): UIAction =>{
    return {
        type: types.uiFinishLoading
    }
}

export {
    setError,
    removeError,
    startLoading,
    finishLoading
}