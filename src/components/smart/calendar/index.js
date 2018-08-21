import React, { Component } from 'react'
import CalendarHeader from '../../dump/calendar/CalendarHeader'
import calendarData from '../../../data/calendarData'
import CalendarBody from './CalendarBody'


export default class Calendar extends Component {
    state = {
        calendarData
    }
    render() {
        return (
            <div id="terminplaner">
                <CalendarHeader />
				<div className="table">
				<table>
					<thead>
						<tr>
							<td>Uhrzeit</td>
							<td>Mo 06.07.</td>
							<td>Di 07.07.</td>
							<td className="active">Mi 08.07.</td>
							<td>Do 09.07.</td>
							<td>Fr 10.07.</td>
							<td className="free" >Sa 11.07.</td>
							<td className="free" >So 12.07.</td>
						</tr>
					</thead>
					<CalendarBody 
                        eventData={this.state.calendarData[0]}/>
				</table>
				</div>
			</div>
        )
    }
}