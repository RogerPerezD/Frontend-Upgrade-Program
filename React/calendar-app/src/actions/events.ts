import { Event, DispatchEvent } from '../reducers/calendarReducer';
import { types } from '../types/types';
import { EventForm } from '../components/calendar/CalendarModal';
import { fetchWithToken } from '../helpers/fetch';
import { RootState } from '../store/store';
import { prepareEvents } from '../helpers/prepareEvents';
import Swal from 'sweetalert2';



export const eventStartAddNew = (event: EventForm) => {
    return async (dispatch: DispatchEvent, getState: ()=> RootState) =>{
        try {
            const {auth} = getState();
            const resp = await fetchWithToken('events/store', 'POST', event);
            const body = await resp.json();
            const newEvent = {
                ...event,
                id: body.event.id,
                user: auth.user
            };
            dispatch( eventAddNew( newEvent as Event ))
        } catch (error) {
            console.log(error);
        }
    }
}

const eventAddNew = ( event: Event ) =>{
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

export const eventStartUpdate = (event: EventForm) =>{
    return async ( dispatch: DispatchEvent,  getState: ()=> RootState) =>{
        const { calendar, auth } = getState();
        const eventId = calendar.activeEvent?.id;
        try {
            const resp = await fetchWithToken(`events/${ eventId }`,'PUT', event)
            const body = await resp.json();
            if (body.ok) {
                const editEvent = {
                    ...event,
                    id: body.event.id,
                    user: auth.user
                };
                dispatch( eventUpdated(editEvent as Event) );
            }else{
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
        
    }
}

const eventUpdated = ( event: Event ) =>{
    return {
        type: types.eventUpdated,
        payload: event
    }
}

export const eventStartDelete = ()=>{
    return async ( dispatch: DispatchEvent,getState: ()=> RootState )=>{
        const { calendar } = getState();  
        const eventId = calendar.activeEvent?.id;
        try {
            const resp = await fetchWithToken(`events/${ eventId }`,'DELETE')
            const body = await resp.json();
            if (body.ok) {
                dispatch( eventDeleted() );
            }else{
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventDeleted = () =>{
    return {
        type: types.eventDeleted
    }
}

export const eventStartLoading = ()=>{
    return async (dispatch: DispatchEvent)=>{
        try {
            const resp = await fetchWithToken('events');
            const body = await resp.json();
            const events = prepareEvents(body.events);
            // console.log(events)
            // console.log(body);
            dispatch(eventLoaded(events))
        } catch (error) {
            console.log(error);
        }
        

    }
}

const eventLoaded = (events: Event[])=>{
    return {
        type: types.eventLoaded,
        payload: events
    }
}

// Clear events when user's logout
export const eventClearLogout = () =>{
    return {
        type: types.eventClearLogout
    }
}