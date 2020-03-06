import React, { Component } from 'react'
import "./style.css"

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="hero mt-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 slides" src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/16_14.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 slides" src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/16_14.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 slides" src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/16_14.jpg" alt="Third slide" />
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
        </div>

        <div className="hero mt-5">
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