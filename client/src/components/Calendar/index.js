import React, { Component } from 'react';
import MonthlyEvents from 'react-monthly-events';
 
class Calendar extends Component {
    render() {
        const currentMonth = new Date('2017-01-01');
        const events = [
            { 
                id: 'event-1', 
                start: '2017-01-03 18:00:00', 
                end: '2017-01-03 19:30:00', 
                allDay: false, 
                event: 'Learn ReactJS' 
            },
            { 
                id: 'event-2', 
                start: '2017-01-04 17:01:00',  
                allDay: false, 
                event: 'Go home' 
            }
        ];
        
        return (
            <div className="row">
                <MonthlyEvents
                    currentMonth={ currentMonth }
                    events={ events }
                />
            </div>
        );
    }
}

export default Calendar;