import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  increment,
  decrement,
} from "../../features/feedbacksSlice";
import VoteButton from "../../components/VoteButton";
import { getFeedbacks } from "../../api/feedbacksAPI";

function Body() {
  const dispatch = useDispatch();
  const { feedbacks } = useSelector((state) => state.feedbacks);


  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  
  function onVote(feedbackId) {
    dispatch(increment(feedbackId));
  }

  function onUnvote(feedbackId) {
    dispatch(decrement(feedbackId));
  }

  return (
    <>
      {feedbacks.map((feedback) => {
        return (
          <div key={feedback.id} className="suggestion_container">
            <div className="suggestion_content">
              <div className="container_number_content">
                
                <VoteButton
                  onDecrement={() => onUnvote(feedback.id)}
                  onIncrement={() => onVote(feedback.id)}
                  count={feedback.counter}
                />

                <Link
                  to={`/feedback-detail/${feedback.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="content">
                    <h4>{feedback.title}</h4>
                    <p>{feedback.details}</p>
                    <button>{feedback.state.category}</button>
                  </div>
                </Link>
              </div>
              <div className="comment">
                <i className="fas fa-comment"></i>
                <span>0</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Body;
