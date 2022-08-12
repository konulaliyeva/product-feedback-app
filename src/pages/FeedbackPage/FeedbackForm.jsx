import React, { useState } from "react";
import Button from "../../components/Button";
import "./Feedback.css";
import { useDispatch } from "react-redux";
import Dropdown from "../../components/Dropdown";
import { insertFeedback } from "../../api/feedbacksAPI";

const dropdownOptions = ["UI", "UX", "Enhancement", "Bug", "Feature"];
const progressOptions = ["Suggestion", "Planned", "In-Progress", "Live"];

function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
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
  const dispatch = useDispatch();

  function handleSubmit() {
    const feedback = {
      title,
      details,
      state,
      counter: 0,
    };
    dispatch(insertFeedback(feedback));
    setTitle("");
    setDetails("");
    setState("");
  }
  return (
    <div className="feedback_container">
      <div className="feedback_logo">
        <div className="logo-plus">
          <i className="fa-solid fa-plus"></i>
        </div>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <div className="feedback_details pt-4">
          <h4 className="pb-2">Feedback Detail</h4>
          <label className="pb-3" htmlFor="">
            Include any specific comments on what should be improved, added,
            etc.
          </label>
          <input
            className="feedback_details_input"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>

        <div className="feedback_buttons pt-5 pb-4">
          <button className="btn btn-cancel-feedback mx-2">Cancel</button>
          <Button onClick={handleSubmit} color="purple">
            Add Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}
export default FeedbackForm;
