import React from 'react';
import { NavBar } from '../ui/NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

moment.locale('es');

const localizer = momentLocalizer(moment);

const events =[{
    title: 'Cumpleanos del Jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'buy cake',
    user: {
        _id: '123',
        name: 'Eric'
    }
    
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
    }
    const onSelectEvent = (e) => {
    }

    const onViewChange = (e) => {
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
    };

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
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />
            <CalendarModal/>
        </div>
    );
};
