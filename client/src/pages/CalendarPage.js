import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";
import Quotes from "./../components/Quotes";
import { Link } from 'react-router-dom'
// import YouTube from "./../components/YouTube";
// import 'bootstrap/dist/css/bootstrap.min.css';

class CalendarPage extends Component {

    render() {
        let now = new Date();
        return (
            <div>
                <div>
                <Quotes />

                </div>

                <div className="calendar-modal">
                    <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                
                                <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                    <Calendar year={now.getFullYear()} month={now.getMonth() + 1} day={now.getDate()} id="calendar-comp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <BarChart />
                </div>

                <br />
                <br />

                <div id="modal-container">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" id="modal-btn">Add an Event</button>
                </div>

                <br />

                <div>
                    <div className="row info-border">
                        <div className="col-md-6  half-right pl-5 pr-0">
                            <div className="event-title pl-5">
                                <h2>Attend an AA Meeting</h2>
                                <p> Don't know where the closet meeting to you is? Here is site to help with that. </p>
                                <div className="event-btn-container">
                                    <Link to="/resource" className="btn btn-primary event-btn">
                                        Click Me!
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 half-left pl-0 pr-0" >
                            <img src="meeting1.jpeg" alt="meeting" id="meeting" className="calendar-img" />
                        </div>
                    </div>

                    <div className="row info-border">
                        <div className="col-md-6 half-right pl-0 pr-0">
                            <img src="video1.jpeg" alt="meetup1" id="meetup1" className="calendar-img" />
                        </div>
                        <div className="col-md-6 half-left pl-5 pr-0">
                            <div className="event-title pl-5">
                                <h2>Watch a Motivational Video</h2>
                                <p> Can't attend a meeting today? That's okay! Watch an AA Meeting online or a motivational speaker. </p>
                                <div className="event-btn-container">
                                    <Link to="/resource" className="btn btn-primary event-btn">
                                        Click Me!
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row info-border">
                        <div className="col-md-6  half-right pl-5 pr-0 ">
                            <div className="event-title text-center pl-5">
                                <h2>Find a local Meetup</h2>
                                <h2>COMING SOON</h2>
                                <div className="event-btn-container">
                                    {/* <div to="*" className="btn btn-primary event-btn">
                                        Click Me!
                                    </div> */}

                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 half-left pl-0 pr-0">
                            <img src="/meetup1.png" alt="video" id="video" className="calendar-img1" />
                        </div>

                    // </div>
                </div>
            </div>

        );
    }
}

export default CalendarPage;