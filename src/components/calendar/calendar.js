import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const CalendarGrid = () => {
  return <FullCalendar defaultView='dayGridMonth' plugins={[ dayGridPlugin ]} />
}

export default CalendarGrid