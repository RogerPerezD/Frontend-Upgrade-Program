import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/es';
import  { Calendar, momentLocalizer, SlotInfo, stringOrDate, View } from 'react-big-calendar';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModalAction } from '../../actions/ui';
import { eventSetActive, eventClearActiveEvent } from '../../actions/events';
import {  Event } from '../../reducers/calendarReducer';
import { AddNewFab } from '../ui/AddNewFab';
import { RootState } from '../../store/store';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es'); //Change dates to spanish

const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const events: Event[] = [{
//   title: 'Meeting important',
//   start: moment().toDate(),
//   end: moment().add( 2, 'hours' ).toDate(),
//   user: {
//     id: '123',
//     name: 'Roger'
//   }
// }];

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state: RootState)=> state.calendar);

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

  const onDoubleClick = (e: Event) => {
    // console.log(e);
    dispatch( openModalAction() );
  }

  const onSelectEvent = (e: Event) => {
    // console.log(e);
    dispatch( eventSetActive(e) );
  }

  const onViewChange = (view: View) => {
    // console.log(view);
    setLastView( view );
    localStorage.setItem('lastView', view);
  }

  const onSelectSlot = (slotInfo: SlotInfo) =>{
    // console.log(slotInfo);
    dispatch( eventClearActiveEvent() );
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
      onSelectSlot = { onSelectSlot }
      selectable = {true}
      />

      <AddNewFab/>

      {
        activeEvent && <DeleteEventFab/>
      }
      <CalendarModal/>
    </div>
  )
}
