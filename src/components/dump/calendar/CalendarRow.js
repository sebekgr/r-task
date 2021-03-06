import React from 'react'
import CalendarEventTile from './CalendarEventTile'
import CalendarTimer from '../../smart/calendar/CalendarTimer'
const days = [0, 1, 2, 3, 4, 5, 6, 7]

export default function Row ({ startHour, displayHour, eventData, onDragStart, onDragOver, onDrop }) {
    const isTimer = displayHour.slice(0, -3) === new Date().toTimeString().slice(0, 2)
    const rows = days.map((day, i) => {
        if(i === 0) {
            return  <td key={i} className='hour tr-hour'>
                        {isTimer ? <CalendarTimer displayHour={displayHour}/> : null}
                        {displayHour}
                    </td>
        } else {
            return <td
                        key={i}
                        className={i === 3 ? 'active' : null}
                        onDragOver={onDragOver}
                        onDrop={e => onDrop(e, { day, startHour })}
                        >
                        {eventData.map(eventTile => {
                            if(eventTile.start_hour === startHour && eventTile.day_number === day) {
                                return <CalendarEventTile key={eventTile.id} eventId={eventTile.id} onDragStart={onDragStart} eventData={eventTile} />
                            } else return null
                        })
                        }
                    </td>
        }
    })
    return rows
}