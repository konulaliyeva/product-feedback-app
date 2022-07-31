import React from "react";
import DropdownCategory from "./DropdownCategory";
import "./FeedbackForm.css";
function FeedbackForm() {
  return (
    <div className="feedback_container">
      <div className="feedback_logo">
          <div className="logo-plus"><i class="fa-solid fa-plus"></i></div>
      </div>
      <div className="feedback_content">
        <h3 className="pb-4">Create New Feedback</h3>

        <div className="feedback_input pb-5">
          <h4 className="pb-2">Feedback Title</h4>
          <label className="pb-3" htmlFor="">Add a short, descriptive headline</label>
          <input type="text" className="feedback-input"/>
        </div>

        <div className="feedback_category">
          <h4 className="pb-2">Category</h4>
          <label className="pb-3" htmlFor="">Choose Category for your feedback</label>
          <DropdownCategory />
        </div>
        <div className="feedback_details pt-4">
          <h4 className="pb-2">Feedback Detail</h4>
          <label className="pb-3" htmlFor="">Include any specific comments on what should be improved, added, etc.</label>
          <input className="feedback_details_input" type="text" required />
        </div>

        <div className="feedback_buttons pt-5 pb-4">
            <button className="btn btn-cancel-feedback mx-2">Cancel</button>
            <button className="btn btn-add-feedback">Add Feedback</button>

        </div>
      </div>
    </div>
  );
}
export default FeedbackForm;