import React from "react";
import Button from "../../components/Button";
import styles from "./FeedbackDetail.module.css";
import { Link} from "react-router-dom";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FeedbackDetail() {
  const params = useParams();
  const { feedbacks, counter} = useSelector((state) => state.feedbacks);
  const voted = useSelector((state)=> state.feedbacks.isClicked)

  let singleFeedback = feedbacks.find(
    (feedbackItem) => feedbackItem.id === Number(params.id)
  );
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
            <Link to="/edit-feedback">
              <Button color="blue">Edit Feedback</Button>
            </Link>
          </div>
          <div className="suggestion_container">
            <div className="suggestion_content">
              <div className="container_number_content">
                <button className={`number ${voted && "voted"}`}>
                  <i className="fa-solid fa-angle-up"></i>
                  <p>{counter}</p>
                </button>
                <div className="content">
                  <h4>{singleFeedback.title}</h4>
                  <p>{singleFeedback.details}</p>
                  <button>{singleFeedback.tag}</button>
                </div>
              </div>
              <div className="comment">
                <i className="fas fa-comment"></i>
                <span>0</span>
              </div>
            </div>
          </div>
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
