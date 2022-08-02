import React from "react";
import "./Body.css";
function Body({ feedbackBody }) {
  return feedbackBody.map((content) => {
    return (
      <div key={content.id} className="suggestion_container">
        <div className="suggestion_content">
          <div className="container_number_content">
            <button className="number">
              <i className="fa-solid fa-angle-up"></i>
              <p>{content.vote}</p>
            </button>
            <div className="content">
              <h4>{content.title}</h4>
              <p>{content.details}</p>
              <button>{content.tag}</button>
            </div>
          </div>
          <div className="comment">
            <i className="fas fa-comment"></i>
            <span>{content.comment}</span>
          </div>
        </div>
      </div>
    );
  });
}

export default Body;
