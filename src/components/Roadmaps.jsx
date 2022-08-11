import React from "react";
import "./Roadmaps.css";
import { Link } from "react-router-dom";

function Roadmaps() {
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
          <p>2</p>
        </div>
        <div className="roadmap_section">
          <div className="point pink"></div>
          <p>In-Progress</p>
          <p>3</p>
        </div>
        <div className="roadmap_section">
          <div className="point blue"></div>
          <p>Live</p>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}

export default Roadmaps;