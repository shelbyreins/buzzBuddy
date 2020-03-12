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
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img className="d-block w-100 slides" src="../image1.jpg" alt="First slide" />
              <div class="carousel-caption  d-md-block ">
                <h2>Hold yourself Accountable</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100 slides" src="../image3.jpeg" alt="Second slide" />
              <div class="carousel-caption  d-md-block">
                <h2>Track your Journey</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 slides" src="../image2.jpeg" alt="Third slide" />
              <div class="carousel-caption  d-md-block">
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

        <div className="jumbotron mb-0 pb-1" id="background-jumbotron3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pl-4">
                <h2 className="landing-title">Why Buzz Buddy?</h2>
                <p className="landing-title"> Buzz Buddy is the perfect buddy for you.  <br /> Built with you in mind. Buzz Buddy has all <br/> the resources  and support to help you stop drinking. <br/> For good this time. </p>

              </div>
              <div className="col-md-6">
                <h2 className="landing-title">How it works?</h2>
                <p className="landing-title">Create an account and get tracking now... < br/> Buzz Buddy is not here to track alcohol intake, <br/> we track events. Be Proud! <br/> Did you go to an AA Meeting today? Track It! <br/> Check out all our resources and track your journey!</p>

              </div>
            </div>

          </div>
        </div>

      </div>

    )
  }
}

export default Landing