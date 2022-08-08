import React, { Link } from "react";
import DropdownCategory from "../FeedbackPage/DropdownCategory";
// import { axiosInstance } from "../../App";
import "../FeedbackPage/FeedbackForm.css";
import { Button } from "../Utils/Button";
import styles from "./EditFeedback.module.css";

function EditFeedback() {
  // const [title, setTitle] = useState("");
  // const [details, setDetails] = useState("");

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const resp = await axiosInstance.post("feedbacks", { title, details });
  //     console.log(resp);
  //   } catch (error) {
  //     console.log("Error was found! ");
  //   }
  // }

  return (
    <div className={styles["edit-feedback"]}>
      <div className="feedback_container">
        <div className="feedback_logo">
          <img src="./public/icon-edit-feedback.svg" alt="" />
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
              /*value={title}
            onChange={(e) => setTitle(e.target.value)}*/
            />
          </div>

          <div className="feedback_category">
            <h4 className="pb-2">Category</h4>
            <label className="pb-3" htmlFor="">
              Choose Category for your feedback
            </label>
            <DropdownCategory />
          </div>

          <div className="feedback_category">
            <h4 className="pb-2">Update status</h4>
            <label className="pb-3" htmlFor="">
              Choose Category for your feedback
            </label>
            <DropdownCategory />
          </div>

          <div className="feedback_buttons pt-5 pb-4">
            <Button>Delete</Button>
            <div>
              <button className="btn btn-cancel-feedback mx-2">Cancel</button>
              <Button
                /*onClick={handleSubmit}*/ className="btn btn-add-feedback"
              >
                Add Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditFeedback;
