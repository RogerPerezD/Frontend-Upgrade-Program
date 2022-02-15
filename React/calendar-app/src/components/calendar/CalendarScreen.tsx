import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import  { Event, Calendar, momentLocalizer, stringOrDate, View } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';

moment.locale('es'); //Change dates to spanish

const localizer = momentLocalizer(moment); // or globalizeLocalizer

export type CustomEvent = Event & {
  user: {
    id: string,
    name: string
  }
}

const events: CustomEvent[] = [{
  title: 'Meeting important',
  start: moment().toDate(),
  end: moment().add( 2, 'hours' ).toDate(),
  user: {
    id: '123',
    name: 'Roger'
  }
}];

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState<string>(localStorage.getItem('lastView') || 'month')

  const eventStyleGetter = ( event: Event, start: stringOrDate, end: stringOrDate, isSelected: boolean) =>{
    // console.log(event, start,end,isSelected);
    const style: React.CSSProperties = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    return {   
                style: style
            };
  }

  const onDoubleClick = (e: CustomEvent) => {
    console.log(e);
  }

  const onSelectEvent = (e: CustomEvent) => {
    console.log(e);
  }

  const onViewChange = (view: View) => {
    // console.log(view);
    setLastView( view );
    localStorage.setItem('lastView', view);
  }

  return (
    <div className='calendar-screen'>
      <Navbar/>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={ messages } //Custom messages, to spanish
      eventPropGetter= { eventStyleGetter }
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={ onDoubleClick}
      onSelectEvent ={ onSelectEvent }
      onView ={ onViewChange }
      view ={ lastView as View}
      />
    </div>
  )
}
