import React from "react";
import FeedbackForm from "./Components/FeedbackPage/FeedbackForm";
import { Link } from "react-router-dom";
import "./Feedback.css";
function Feedback() {
  return (
    <div className=" wrapper_feedback">
      <div className="btn-back">
        <i className="fa-solid fa-angle-left mx-2"></i>
        <Link to="/" className="link-back">
          Go back
        </Link>
      </div>
      <FeedbackForm />
    </div>
  );
}

export default Feedback;
