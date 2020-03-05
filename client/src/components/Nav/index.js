import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Modal from "../components/Modal"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
       <img src="../logo1.png" alt="logo"></img>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
            //   data-toggle="modal"
            // data-target="#exampleModal
              className={
                window.location.pathname === "/" 
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Sign up"
              className={window.location.pathname === "/calendar" 
              ? "nav-link active" 
              : "nav-link"}
            >
              Sign up
            </Link>
          </li>
   
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

