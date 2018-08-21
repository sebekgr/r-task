import React, { Component } from 'react'
import CalendarHeader from '../../dump/calendar/CalendarHeader'
import calendarData from '../../../data/calendarData'
import CalendarBody from './CalendarBody'
// import hours from '../../../helpers/hoursList'

export default class Calendar extends Component {
    state = {
        calendarData
	}
	
	onDragStart = (e, eventId) => {
		e.dataTransfer.setData('eventId', eventId)
    }
    onDrop = (e, dropData) => {
		const { calendarData } = this.state
		const eventId = +e.dataTransfer.getData('eventId')
		const updateCalendarData = calendarData.map(calData => {
			if(calData.id === eventId) {
				return {...calData, start_hour: dropData.startHour, day_number: dropData.day}

			} else {
				return calData
			}
		})
		this.setState({ calendarData: updateCalendarData})
    }
    onDragOver = e => {
        e.preventDefault()
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
                        eventData={this.state.calendarData}
						onChangeData={this.handleChangeData}
						onDragStart={this.onDragStart}
						onDragOver={this.onDragOver}
						onDrop={this.onDrop}
						/>
				</table>
				</div>
			</div>
        )
    }
}