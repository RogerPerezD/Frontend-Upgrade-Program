import React from 'react'
import { useDispatch } from 'react-redux';
import { openModalAction } from '../../actions/ui';

export const AddNewFab = () => {
    const dispatch = useDispatch();
    const handleAddEvent = () =>{
        dispatch( openModalAction() );
    }
    return (
        <button
            className='btn btn-primary fab'
            onClick={ handleAddEvent }
        >
            <i className='fas fa-plus'></i>
        </button>
    );
}
