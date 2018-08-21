import React, { Component } from 'react'
import Row from '../../dump/calendar/CalendarRow'
import hours from '../../../helpers/hoursList'

export default class CalendarBody extends Component {

    render() {
        const columns = hours.map(({ start_hour, display_hour }) => (
        <tr key={start_hour}>
                <Row
                    displayHour={display_hour}
                    startHour={start_hour}
                    eventData={this.props.eventData}
                    onDragStart={this.props.onDragStart}
                    onDragOver={this.props.onDragOver}
                    onDrop={this.props.onDrop}
                    />
            </tr>
        ))

        return (
            <tbody>
                {columns}
            </tbody>
        )
    }



    
}