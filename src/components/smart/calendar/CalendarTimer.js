import React, { Component } from 'react'

export default class CalendarTimer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hour: new Date().toTimeString().slice(0, 2),
            minutes: new Date().toTimeString().slice(3, 5),
            marginTop: new Date().toTimeString().slice(3, 5) * 2.2
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.moveTimer(), 1000 * 60);
    }

    moveTimer = () => {
        const setMinutes = new Date().toTimeString().slice(3, 5)
        const setHours = new Date().toTimeString().slice(0, 2)
        if(this.state.marginTop === 132) {
            this.setState({ marginTop: 0, hour: setHours, minutes: setMinutes })
        } else {
            this.setState(prevState => ({ marginTop: prevState.marginTop + 2.2,  hour: setHours, minutes: setMinutes }))
        }        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { hour, minutes, marginTop } = this.state
        return (
            <div 
            className="timer"
            style={{ marginTop: `${marginTop}px` }}>
            <span>{hour} : {minutes}</span>
        </div>
        )
    }
}