import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
function Body() {
  return (
    <Link to="/feedback-detail" style={{ textDecoration: "none" }}>
      <div className="suggestion_container">
        <div className="suggestion_content">
          <div className="container_number_content">
            <button className="number">
              <i className="fa-solid fa-angle-up"></i>
              <p>123</p>
            </button>
            <div className="content">
              <h4>Nese</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                magnam, nulla sequi delectus excepturi eveniet.
              </p>
              <button>Bug</button>
            </div>
          </div>
          <div className="comment">
            <i className="fas fa-comment"></i>
            <span>3</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Body;
