import React from 'react'

export default function CalendarEventTile () {
    return (
        <div
            className="event q4 past"
            draggable={true}
            style={{top: 0}}
            >
            <p className="hours">08:00 - 09:00</p>
            <p className="description">Meier</p>
            <span className="icon"></span>
        </div>
    )
}