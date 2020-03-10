import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";
// import YouTube from "./../components/YouTube";
import 'bootstrap/dist/css/bootstrap.min.css';


class CalendarPage extends Component {
    render() {
        let now = new Date();
        return (
            <div>

                <div className="jumbotron">
                    <div className="container">
                        <h4 id="quotes">QUOTES GO HERE</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <main id="app" className="ml-5 mt-5 ">
                                <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} />
                            </main>

                        </div>
                        <div className="col-md-9">
                            <BarChart />
                        </div>
                    </div>
                </div>

                <br />
                <br />
                
                

                <div id="modal-container">
                    <button className="btn btn-primary" id="modal-btn">Add an Event</button>

                </div>

                {/* <div>
                                <YouTube />
                            </div> */}

                <br />
                
                
                <div>
                    <div className="row info-border">
                        <div className="col-md-6  half-right pl-5 pr-0">
                            <div className="event-title pl-5">
                                <h2>Attend an AA Meeting</h2>
                                <p> INSERT MESSAGE</p>
                                <div className="event-btn-container">
                                    <button className="btn btn-primary event-btn" >Click Me!</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 half-left pl-0 pr-0" >
                            <img src="../meeting1.jpeg" alt="meeting" id="meeting" className="calendar-img" />

                        </div>

                    </div>

                    <div className="row info-border">
                        <div className="col-md-6 half-right pl-0 pr-0">
                            <img src="../video1.jpeg" alt="meetup1" id="meetup1" className="calendar-img" />
                        </div>
                        <div className="col-md-6 half-left pl-5 pr-0">
                            <div className="event-title pl-5">
                                <h2>Watch a Motivational Video</h2>
                                <p> Can't attend a meeting today? That's okay! Watch an AA Meeting online or a motivational speaker. </p>
                                <div className="event-btn-container">
                                    <button className="btn btn-primary event-btn" >Click Me!</button>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row info-border">
                        <div className="col-md-6  half-right pl-5 pr-0 ">
                            <div className="event-title pl-5">
                                <h2>Find a local Meetup</h2>
                                <p>Need to find a new hobby? Perfect, Meetup is a great way to people with the same interests as you!</p>
                                <div className="event-btn-container">
                                    <button className="btn btn-primary event-btn" >Click Me!</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 half-left pl-0 pr-0">
                            <img src="../meetup1.png" alt="video" id="video" className="calendar-img1" />
                        </div>

                    </div>


                </div>
            </div>

        );
    }
}

export default CalendarPage;