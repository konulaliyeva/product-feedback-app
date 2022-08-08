import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown.jsx"
function Header() {
  
  return (
    <div className="header_container">
      <div className="header_left">
        <i className="fas fa-lightbulb"></i>
        <p className="suggestions">6 Suggetions</p> 
        <Dropdown />
      </div>

      <div className="header_right">
        <NavLink to="/feedback" className="add_btn">+ Add Feedback</NavLink>
      </div>
    </div>
  );
}

export default Header;
