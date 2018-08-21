import React from 'react'
import CalendarEventTile from './CalendarEventTile'
const days = [1, 2, 3, 4, 5, 6, 7]

export default function CalendarEventsWrapper () {
    return (
        <div className="events">
            <div
                className="day"
                data-day="1"
                onDragStart={e => console.log(e)}>
                <CalendarEventTile />
            </div>
            <div className="day" data-day="2">

            </div>
            <div className="day" data-day="3">
            </div>
            <div className="day" data-day="4">

            </div>
            <div className="day" data-day="5">

            </div>
            <div className="day" data-day="6"></div>
            <div className="day" data-day="7"></div>
        </div>
    )
}