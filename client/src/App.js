import React, { Component } from "react";
import CalendarPage from "./pages/CalendarPage";
// import Sign from "./pages/Saved";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/saved" component={Saved} /> */}
            <Route exact path="/calendar" component={CalendarPage} />
            </Switch>
          
        </div>
      </Router>
    )
  }
}

export default App;
