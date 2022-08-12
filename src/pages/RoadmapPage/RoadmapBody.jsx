import React from "react";
import styles from "./RoadmapBody.module.css";
import SingleRoadmap from "./SingleRoadmap";
function RoadmapBody() {

  return (
    <div className={styles["roadmap-body-container"]}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className={styles["roadmap-section"]}>
              <div className={styles["roadmap-section-content"]}>
                <h4>Planned (2)</h4>
                <p>Ideas prioritized for research</p>
               <SingleRoadmap/>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className={styles["roadmap-section"]}>
              <div className={styles["roadmap-section-content"]}>
                <h4>In-Progress (3)</h4>
                <p>Currently being developed</p>
               

              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className={styles["roadmap-section"]}>
              <div className={styles["roadmap-section-content"]}>
                <h4>Live (1)</h4>
                <p>Released features</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapBody;
