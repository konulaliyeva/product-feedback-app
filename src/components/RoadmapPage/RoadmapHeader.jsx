import React from "react";
import styles from "./RoadmapPage.module.css";
import { NavLink, Link } from "react-router-dom";
function RoadmapHeader() {
  return (
    <div className={styles["roadmap-header-container"]}>
      <div className={styles["roadmap-header-content"]}>
        <div className={styles["roadmap-header-left"]}>
          <div className={styles["btn-back-roadmap"]}>
            <i className={styles['angle']+ " fa-solid fa-angle-left mx-2"}></i>
            <Link to="/" className={styles["link-back-roadmap"]}>
              Go back
            </Link>
          </div>
          <h4 className="mx-5 mb-3">Roadmap</h4>
        </div>

        <div className={styles["roadmap-header-right"]}>
          <NavLink to="/feedback" className="add_btn">
            + Add Feedback
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RoadmapHeader;
