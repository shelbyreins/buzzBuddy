// import React from "react";
// import CalendarPage from "./pages/CalendarPage";
// // import Navbar from "./components/Calendar";

// function App() {
//   return (
//     <div>
//       <CalendarPage />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
// import Profile from './components/Profile'
import CalendarPage from "./pages/CalendarPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={CalendarPage} />
        </div>
      </Router>
    )
  }
}

export default App