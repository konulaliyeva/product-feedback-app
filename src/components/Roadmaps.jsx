import React from "react";
import "./Roadmaps.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Roadmaps() {
  const { feedbacks } = useSelector((state) => state.feedbacks);

  let filtredPlanned = feedbacks.filter(
    (feedback) => feedback.state.progress === "Planned"
  );
  let filtredInProgress = feedbacks.filter(
    (feedback) => feedback.state.progress === "In-Progress"
  );
  let filtredLive = feedbacks.filter(
    (feedback) => feedback.state.progress === "Live"
  );
  return (
    <div className="roadmap_board px-3 py-3 pb-5">
      <div className="roadmap_title">
        <h5>Roadmap</h5>
        <Link to="/roadmap">View</Link>
      </div>
      <div className="roadmap_sections pt-4 px-2">
        <div className="roadmap_section">
          <div className="point orange"></div>
          <p>Planned</p>
          <p>{filtredPlanned.length}</p>
        </div>
        <div className="roadmap_section">
          <div className="point pink"></div>
          <p>In-Progress</p>
          <p>{filtredInProgress.length}</p>
        </div>
        <div className="roadmap_section">
          <div className="point blue"></div>
          <p>Live</p>
          <p>{filtredLive.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmaps;
