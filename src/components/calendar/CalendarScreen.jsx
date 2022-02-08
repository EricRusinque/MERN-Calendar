import React from 'react';
import { NavBar } from '../ui/NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { useSelector } from 'react-redux';
import { DeleteEventFab } from '../ui/DeleteEventFab';



moment.locale('es');

const localizer = momentLocalizer(moment);


export const CalendarScreen = (  ) => {

    const dispatch = useDispatch();
    const  { events, activeEvent }  = useSelector(state => state.calendar);
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month');

    // TODO: leer del store los eventos

    console.log();

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    }
    const onSelectEvent = (e) => {
        dispatch( eventSetActive( e ) ); 
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const eventStylesGetter = (event, start, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    const onSelectSlot = () => {
        dispatch( eventClearActiveEvent() );
    }

    return (
        <div className="calendar-screen">
            <NavBar/>

            <Calendar 
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={ eventStylesGetter }
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={ onSelectEvent }
                onSelectSlot={ onSelectSlot }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />
            {
                (activeEvent) && <DeleteEventFab/>
            }
            <AddNewFab/>
            <CalendarModal/>
        </div>
    );
};
