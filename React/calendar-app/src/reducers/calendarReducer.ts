import moment from 'moment';
import { types } from '../types/types';
interface User{
    id: string;
    name: string;
}

export interface Event {
    id: number;
    title: string;
    notes: string;
    start: Date;
    end: Date;
    user: User
}

export type EventState = {
    events: Event[],
    activeEvent: Event | null
}

export type EventAction = {
    type: string,
    payload?: Event
}

const initialState: EventState = {
    events: [{
        id: new Date().getTime(),
        title: 'Meeting important',
        notes: 'Description note',
        start: moment().toDate(),
        end: moment().add( 2, 'hours' ).toDate(),
        user: {
            id: '123',
            name: 'Roger'
        }
    }],
    activeEvent: null
}


export const calendarReducer = ( state = initialState, action: EventAction): EventState =>{
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload as Event 
            };
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload as Event]
            };
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            };
        case types.eventUpdated:
            const eventToUpdate = action.payload as Event;
            return {
                ...state,
                events: state.events.map((event) => (event.id === eventToUpdate.id) ? eventToUpdate : event)
            };
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter((event) => (event.id !== state.activeEvent?.id) ),
                activeEvent: null
            };
    
        default:
            return state;
    }
}