import React, { Component } from 'react'
import "./style.css"

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div className="jumbotron mt-3"> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 slides" src="../image1.jpg" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2>Hold yourself Accountable</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item  align-items-center">
              <img className="d-block w-100 slides" src="../image3.jpeg" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2>Track your Journey</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 slides" src="../image2.jpeg" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2>Save Money</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* </div> */}

        <div className="jumbotron">
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

    )
  }
}

export default Landing