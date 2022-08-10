import React from "react";
import Button from "../../components/Utils/Button";
import styles from "./FeedbackDetail.module.css";
import Body from "../HomePage/Body";
import { Link, NavLink } from "react-router-dom";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";
function FeedbackDetail() {
  return (
    <div className={styles["feedbackDetails-container"]}>
      <div className={styles["feedbackDetails-content"]}>
        <div className={styles["section-top"]}>
          <div className={styles["feedbackDetails-top"]}>
            <div className={styles["btn-back"]}>
              <i className="fa-solid fa-angle-left mx-2"></i>
              <Link to="/" className={styles["link-back"]}>
                Go back
              </Link>
            </div>
            <Link to='/edit-feedback'>
            <Button color="blue">Edit Feedback</Button>
            </Link>

          </div>
          <Body />
        </div>
        <div className={styles["section-middle"]}>
          <div className={styles["comments-details"]}>
            <h3>4 comments</h3>
            <SingleComment />
            <SingleComment />
          </div>
        </div>
        <div className={styles["section-bottom"]}>
          <AddComment />
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
