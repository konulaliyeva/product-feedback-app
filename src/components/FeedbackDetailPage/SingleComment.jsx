import React from "react";
import styles from "./FeedbackDetail.module.css";
import { Link } from "react-router-dom";
import SingleReply from "./SingleReply";
import Replies from "./Replies";
function SingleComment() {
  return (
    <div className={styles["comment-container"]+ " mt-5"}>
      <div className={styles["comment-content"]}>
        <div className={styles["comment-top"]}>
          <div className={styles["comment-user-info"]}>
            <div className={styles["comment-profile-img"]}>
              <img src="../user-images/image-elijah.jpg" alt="" />
            </div>
            <div className={styles["comment-username"]}>
              <h5>Elijah Moss</h5>
              <p>@hexagon.bestagon</p>
            </div>
          </div>
          <div className={styles["comment-reply"]} >
            <Link to={`/feedback-detail/single-reply`}>Reply</Link>
          </div>
        </div>
        <div className={styles["comment-body"]}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            vel eum dolores unde, in maxime ea quibusdam ipsum deserunt. Quidem
            quo perferendis accusantium ea, quod facilis at doloribus dicta
            autem.
          </p>
        </div>
      </div>
      <Replies />
      <SingleReply/>
    </div>
  );
}

export default SingleComment;
