import React from 'react'
import { EventProps } from 'react-big-calendar';
import { CustomEvent } from './CalendarScreen';

export const CalendarEvent = ({event}: EventProps<CustomEvent>) => {
    // console.log(event);
    const { title, user } = event;
    return (
        <div>
            <strong>{title} </strong>
            <span>- {user.name}</span>
        </div>
    )
}
