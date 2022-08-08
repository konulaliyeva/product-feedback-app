import React from "react";
import styles from "./RoadmapBody.module.css";
function SingleRoadmap() {
  return (
    <div className={styles["single-roadmap-container"]}>
      <div className={styles["colored-div"]}></div>
      <div className={styles["single-roadmap-content"]}>
        <div className={styles["single-roadmap-top"]}>
          <div className={styles["colored-dot"]}></div>
          <p>Planned</p>
        </div>
        <div className={styles["single-roadmap-text"]}>
          <h3>Learning paths</h3>
          <p>Sequenced projects for different goals to help people improve.</p>
        </div>
        <button className="catg_btn mx-2 mb-3">UX</button>
        <div className={styles["single-roadmap-bottom"] + " mt-3"}>
          <button className={styles["number"]}>
            <i className="fa-solid fa-angle-up" mx-4></i>
            <p>21</p>
          </button>
          <div className={styles["comment"]}>
            <i className={styles['comment-icon']+ " fas fa-comment mx-2"}></i>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoadmap;
