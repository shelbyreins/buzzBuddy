import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";

class CalendarPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Calendar />
                </div>
                <div>
                    <BarChart />
                </div>
            </div>
        );
    }
}

export default CalendarPage;