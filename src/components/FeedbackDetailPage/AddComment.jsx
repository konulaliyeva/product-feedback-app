import React from "react";
import Button from "../Utils/Button";
import styles from "./FeedbackDetail.module.css"
function AddComment(){
    return (
        <div className={styles['add-comment']}>
                <h4>Add comment</h4>
                <input type="text" placeholder="Type your comment here"/>
                <div className={styles['add-comment-footer']}>
                    <p>250 characters left</p>
                    <Button color="purple">Post Comment</Button>
                </div>
        </div>
    )
}
export default AddComment;