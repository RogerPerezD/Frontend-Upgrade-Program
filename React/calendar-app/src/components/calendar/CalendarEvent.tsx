import React from 'react'
import { EventProps } from 'react-big-calendar';
// import { CustomEvent } from './CalendarScreen';
import { Event } from '../../reducers/calendarReducer';

export const CalendarEvent = ({event}: EventProps<Event>) => {
    // console.log(event);
    const { title, user } = event;
    return (
        <div>
            <strong>{title} </strong>
            <span>- {user.name}</span>
        </div>
    )
}
