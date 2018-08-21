import React, { Component } from 'react'
import Row from '../../dump/calendar/CalendarRow'

const hours = [
    {start_hour: 0, display_hour: '08:00'},
    {start_hour: 1, display_hour: '09:00'},
    {start_hour: 2, display_hour: '10:00'},
    {start_hour: 3, display_hour: '11:00'},
    {start_hour: 4, display_hour: '12:00'},
    {start_hour: 5, display_hour: '13:00'},
    {start_hour: 6, display_hour: '14:00'},
    {start_hour: 7, display_hour: '15:00'},
    {start_hour: 8, display_hour: '16:00'},
    {start_hour: 9, display_hour: '17:00'},
    {start_hour: 10, display_hour: '18:00'},
    {start_hour: 11, display_hour: '19:00'},
    {start_hour: 12, display_hour: '20:00'}
]


export default class CalendarBody extends Component {

    onDragStart = e => {
        console.log (e.target)
    }

    onDragOver = e => {
        //console.log(e.target)
    }

    onDrop = e => {
        console.log(e.target)

    }
    onDragOver = e => {
        e.preventDefault()
    }

    render() {
        const columns = hours.map(({ start_hour, display_hour}) => (
            <tr key={start_hour}>
                <Row
                    displayHour={display_hour}
                    startHour={start_hour}
                    eventData={this.props.eventData}
                    onDragStart={this.onDragStart}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    onDragOver={this.onDragOver}/>
            </tr>
        ))

        return (
            <tbody>
                {columns}
            </tbody>
        )
    }



    
}