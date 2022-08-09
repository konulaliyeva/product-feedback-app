import React from "react";
import Button from "../Utils/Button";
import styles from "./FeedbackDetail.module.css";
function SingleReply() {
  return (
    <div className={styles["single-reply"] + ' mb-5 mt-5'}>
      <input type="text" placeholder="Reply to @hexagon.bestagon.." />
      <div className={styles['single-reply-btns']}>
        <Button color="purple">Post Reply</Button>


      </div>
    </div>
  );
}

export default SingleReply;
