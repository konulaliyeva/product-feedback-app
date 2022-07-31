import React from "react";
import { NavLink } from "react-router-dom";
import FeedbackForm from "./components/HomePage/Feedback/FeedbackForm";
import "./Feedback.css";
function Feedback() {
  return (
    <div className=" wrapper_feedback">
      <NavLink to="/" className="btn-back pb-3">
        <i className="fa-solid fa-angle-left mx-3"></i>Go back
      </NavLink>
      <FeedbackForm />
    </div>
  );
}

export default Feedback;
