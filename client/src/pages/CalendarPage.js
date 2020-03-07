import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";
import YouTube from "./../components/YouTube";

class CalendarPage extends Component {
    render() {
        let now = new Date();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="mt-5">
                        <BarChart />
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                    <main id="app" className="ml-5 mt-5">
                            <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} />
                        </main>
                        
                    </div>
                    <div>
                        <YouTube />
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarPage;