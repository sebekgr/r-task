import React from 'react'

const days = [1, 2, 3, 4, 5, 6, 7]
const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

const Row = ({ hour }) => {
    const row = days.map((day, i) => {
        let className;
        if(i === 0) className = 'hour'
        if(i === 4) className = 'active'
        return <td className={className}>{i === 0 ? hour : 'trolo'}</td>
    })
    return row
}



export default function CalendarHeader() {    

    const column = hours.map(hour => (
        <tr key={hour} data-hour={hour}>
            <Row hour={hour} />
        </tr>
    ))

    return (
        <tbody>
            {column}
        </tbody>
    )
}