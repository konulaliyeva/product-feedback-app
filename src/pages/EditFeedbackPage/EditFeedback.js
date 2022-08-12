import React, { useState } from "react";
// import { axiosInstance } from "../../App";
import "../../pages/FeedbackPage/Feedback.css";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import styles from "./EditFeedback.module.css";
const dropdownOptions = ["UI", "UX", "Enhancement", "Bug", "Feature"];
const progressOptions = ["Suggestion", "Planned", "In-Progress", "Live"];

function EditFeedback() {
  const [state, setState] = useState({
    category: "",
    progress: "",
  });

  
  function handleChange(option, e) {
    setState({
      ...state,
      [e.target.name]: option,
    });
  }

  return (
    <div className={styles["edit-feedback"]}>
      <div className="feedback_container">
        <div className="feedback_logo">
          <img src="../icon-edit-feedback.svg" alt="" />
        </div>
        <div className="feedback_content">
          <h3 className="pb-4">Create New Feedback</h3>

          <div className="feedback_input pb-5">
            <h4 className="pb-2">Feedback Title</h4>
            <label className="pb-3" htmlFor="">
              Add a short, descriptive headline
            </label>
            <input
              type="text"
              className="feedback-input"
             
            />
          </div>

          <div className="feedback_category">
            <h4 className="pb-2">Category</h4>
            <label className="pb-3" htmlFor="">
              Choose Category for your feedback
            </label>
            <Dropdown
              width="lg"
              options={dropdownOptions}
              onChange={(value) => {
                const event = {
                  target: {
                    name: "category",
                  },
                };
                handleChange(value, event);
              }}
              trigger={({ handleClick }) => (
                <input
                  className="catg-dropdown-input"
                  type="text"
                  name="category"
                  defaultValue={state.category}
                  onClick={(e) => handleClick(e.target.value)}
                />
              )}
            />
          </div>

          <div className="feedback_category mt-4 mb-4">
            <h4 className="pb-2">Update status</h4>
            <label className="pb-3" htmlFor="">
              Choose Category for your feedback
            </label>
            <Dropdown
              width="lg"
              options={progressOptions}
              onChange={(value) => {
                const event = {
                  target: {
                    name: "progress",
                  },
                };
                handleChange(value, event);
              }}
              trigger={({ handleClick }) => (
                <input
                  className="catg-dropdown-input"
                  type="text"
                  name="progress"
                  defaultValue={state.progress}
                  onClick={(e) => handleClick(e.target.value)}
                />
              )}
            />
          </div>

          <div
            className={
              styles["edit-btn"] + " pt-5 d-flex justify-content-between"
            }
          >
            <Button color="red">Delete</Button>
            <div>
              <Button color="black">Cancel</Button>
              <Button color="purple">Add Feedback</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditFeedback;
