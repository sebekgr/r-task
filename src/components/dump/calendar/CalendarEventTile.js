import React from 'react'

export default function CalendarEventTile ({ eventData, onDragStart, eventId }) {
    const { patient, start_time, end_time } = eventData
    const sTime = start_time.split(' ')[1].slice(0, -3)
    const getHour = new Date().getHours()
    const eventHour = new Date(start_time).getHours()
    const eTime = end_time.split(' ')[1].slice(0, -3)
    let status
    if(eventHour > getHour) {
        status = 'future'
    } else if (eventHour <  getHour) {
        status = 'past'
    } else {
        status = 'present'
    }
    return (
        <div
            className={`event q4 ${status}`}
            draggable={true}
            onDragStart={e => onDragStart(e, eventId)}
            >
            <p className="hours">{sTime} - {eTime}</p>
            <p className="description">
                {patient.salutation} {patient.firstname}    
            </p>
            <span className="icon"></span>
        </div>
    )
}