import React from "react";
import './NavBar.css'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="black" >
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo">
          Airbnb
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="host">Become a host</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
