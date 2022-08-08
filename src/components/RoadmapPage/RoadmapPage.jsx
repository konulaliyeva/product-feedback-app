import React from "react";
import RoadmapBody from "./RoadmapBody";
import RoadmapHeader from "./RoadmapHeader";
import styles from "./RoadmapPage.module.css"
function RoadmapPage (){
    return (
        <div className={styles["roadmap-wrap"]}>
        <RoadmapHeader />
        <RoadmapBody />
        </div>
    )
}

export default RoadmapPage;