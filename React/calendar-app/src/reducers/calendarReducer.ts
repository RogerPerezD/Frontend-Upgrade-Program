import { types } from '../types/types';
import { User } from './authReducer';


export interface Event {
    id: string;
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
    payload?: Event | Event[]
}

export type DispatchEvent= (args: EventAction) => EventAction;

const initialState: EventState = {
    events: [],
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
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload as Event []]
            }
        case types.eventClearLogout:
            return initialState;
    
        default:
            return state;
    }
}