import moment from 'moment';
import { Event } from '../reducers/calendarReducer';

export const prepareEvents = ( events: Event []) =>{
    // console.log(events);

    return events.map( (event) => {
        return {
            ...event,
            end: moment( event.end ).toDate(),
            start: moment( event.start ).toDate(),
        }
    })
}