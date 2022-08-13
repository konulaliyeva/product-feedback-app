import React from "react";
import { useSelector } from "react-redux";
import styles from "./RoadmapBody.module.css";
function SingleRoadmap() {
  const {feedbacks} = useSelector(state=> state.feedbacks);
  return (
    <>
    {feedbacks.map(feedback=>{
      <div className={styles["single-roadmap-container"]}>
      <div className={styles["colored-div"]}></div>
      <div className={styles["single-roadmap-content"]}>
        <div className={styles["single-roadmap-top"]}>
          <div className={styles["colored-dot"]}></div>
          <p>{feedback.state.progress}</p>
        </div>
        <div className={styles["single-roadmap-text"]}>
          <h3>{feedback.title}</h3>
          <p>{feedback.details}</p>
        </div>
        <button className="catg_btn mx-2 mb-3">{feedback.state.category}</button>
        <div className={styles["single-roadmap-bottom"] + " mt-3"}>
          <button className={styles["number"]}>
            <i className="fa-solid fa-angle-up" mx-4></i>
            <p>{feedback.counter}</p>
          </button>
          <div className={styles["comment"]}>
            <i className={styles['comment-icon']+ " fas fa-comment mx-2"}></i>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
    })}
    </>
   
  );
}

export default SingleRoadmap;
