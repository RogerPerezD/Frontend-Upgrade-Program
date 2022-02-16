// import { CustomEvent } from '../components/calendar/CalendarScreen';
import { EventAction, Event } from '../reducers/calendarReducer';
import { types } from '../types/types';

export const eventAddNew = ( event: Event ) =>{
    return {
        type: types.eventAddNew,
        payload: event
    }
}

export const eventSetActive = ( event: Event ) =>{
    return {
        type: types.eventSetActive,
        payload: event
    }
}

export const eventClearActiveEvent = ( ) =>{
    return {
        type: types.eventClearActiveEvent
    }
}

export const eventUpdated = ( event: Event ) =>{
    return {
        type: types.eventUpdated,
        payload: event
    }
}