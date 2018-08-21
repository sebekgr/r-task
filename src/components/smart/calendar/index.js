import React, { Component } from 'react'
import CalendarHeader from '../../dump/calendar/CalendarHeader'
import calendarData from '../../../data/calendarData'
import CalendarBody from './CalendarBody'
import hours from '../../../helpers/hoursList'

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
				// date formatting improvisation
				const sDate = calData.start_time.split(' ')[0]
				const setHourStart = hours[dropData.startHour].display_hour
				let setHourEnd
				if(setHourStart === hours[hours.length - 1].display_hour) {
					setHourEnd = hours[hours.length - 1].display_hour
				} else {
					setHourEnd = hours[dropData.startHour + 1].display_hour
				}
				const setTimeStart = `${sDate} ${setHourStart}:00`
				const setTimeEnd = `${sDate} ${setHourEnd}:00`
				
				return {
						...calData,
						start_hour: dropData.startHour,
						day_number: dropData.day,
						start_time: setTimeStart,
						end_time: setTimeEnd
				}

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