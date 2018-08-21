import React from 'react'
import CalendarEventTile from './CalendarEventTile'

const days = [0, 1, 2, 3, 4, 5, 6, 7]

export default function Row ({ startHour, displayHour, eventData, onDragStart, onDragOver, onDrop }) {
    const { start_hour, day_number } = eventData
    const rows = days.map((day, i) => {
        if(i === 0) {
            return <td
                        key={i}
                        className='hour'
                        >
                        {displayHour}
                    </td>
        } else {
            return <td
                        key={i}
                        className={i === 3 ? 'active' : null}
                        data-day={day}
                        data-hour={displayHour}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        >
                        {
                            start_hour === startHour &&
                            day_number === day ? 
                            <CalendarEventTile
                                onDragStart={onDragStart}
                                eventData={eventData}
                                /> : null
                        }
                    </td>
        }
    })
    return rows
}