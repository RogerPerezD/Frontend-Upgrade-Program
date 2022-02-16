import React from 'react'
import { useDispatch } from 'react-redux';
import { eventDeleted, eventClearActiveEvent } from '../../actions/events';

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    const handleDeleteEvent = () =>{
        dispatch( eventDeleted() );
        // dispatch( eventClearActiveEvent() );
    }
    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={ handleDeleteEvent }
        >
            <i className='fas fa-trash'></i>
            <span>Delete Event</span>
        </button>
    )
}
