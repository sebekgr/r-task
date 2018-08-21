import React from 'react'

export default function CalendarEventTile ({ eventData, onDragStart }) {
    const { patient, start_time, end_time } = eventData
    const sTime = start_time.split(' ')[1].slice(0, -3)
    const eTime = end_time.split(' ')[1].slice(0, -3)
    return (
        <div
            className="event q4 past"
            draggable
            onDragStart={onDragStart}
            >
            <p className="hours">{sTime} - {eTime}</p>
            <p className="description">
                {patient.salutation} {patient.firstname}    
            </p>
            <span className="icon"></span>
        </div>
    )
}