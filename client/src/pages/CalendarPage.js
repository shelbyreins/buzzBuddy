import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";

class CalendarPage extends Component {
    render() {
        let now = new Date();
        return (
            <div>
                <main id="app">
                    <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} />
                </main>

                <div>
                    <BarChart />
                </div>
            </div>
        );
    }
}

export default CalendarPage;