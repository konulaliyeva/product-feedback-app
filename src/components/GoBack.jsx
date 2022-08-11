import React from "react";
import { Link } from "react-router-dom";
import "./GoBack.css";
function GoBack() {
  return (
    <div className="btn-back">
      <i className= "fa-solid fa-angle-left mx-2"></i>
      <Link to="/" className='link-back'>Go back</Link>
    </div>
  );
}


export default GoBack;