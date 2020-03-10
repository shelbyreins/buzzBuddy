import React, { Component } from "react";
import Calendar from "./../components/Calendar";
import BarChart from "./../components/BarChart";
import YouTube from "./../components/YouTube";
import Hero from "./../components/Hero"

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
                            {/* <div className="mt-5"> */}
                            <BarChart />
                        </div>
                    </div>
                </div>

                {/* </div>
                            */}
                {/* <div>
                                <YouTube />
                            </div> */}

                <div className="jumbotron background-jumbotron">
                    {/* <div className="container"> */}
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Why Buzz Buddy?</h2>
                            <p> Buzz Buddy is the perfect buddy for you.  <br /> Built to track your daily alcohol intake and keep a record of your daily drinking history making it available to you in a calendar view. </p>

                        </div>
                        <div className="col-md-6">
                            <h2>How it works?</h2>
                            <p>Create an account and get tracking now... <br /> Make the change!</p>

                        </div>
                    </div>

                    {/* </div> */}
                </div>

                <div className="jumbotron background-jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Why Buzz Buddy?</h2>
                                <p> Buzz Buddy is the perfect buddy for you.  <br /> Built to track your daily alcohol intake and keep a record of your daily drinking history making it available to you in a calendar view. </p>

                            </div>
                            <div className="col-md-6">
                                <h2>How it works?</h2>
                                <p>Create an account and get tracking now... <br /> Make the change!</p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="jumbotron background-jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Why Buzz Buddy?</h2>
                                <p> Buzz Buddy is the perfect buddy for you.  <br /> Built to track your daily alcohol intake and keep a record of your daily drinking history making it available to you in a calendar view. </p>

                            </div>
                            <div className="col-md-6">
                                <h2>How it works?</h2>
                                <p>Create an account and get tracking now... <br /> Make the change!</p>

                            </div>
                        </div>

                    </div>
                </div>



            </div>

        );
    }
}

export default CalendarPage;