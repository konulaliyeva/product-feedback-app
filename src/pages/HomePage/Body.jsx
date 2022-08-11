import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFeedbacks, increment} from "../../features/feedbacksSlice";
function Body() {
  const dispatch = useDispatch();
  const { feedbacks, counter} = useSelector((state) => state.feedbacks);
  const voted = useSelector((state)=> state.feedbacks.isClicked)
  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  
  function handleVote (id){
    // let targetedVote= feedbacks.map(feedbackItem=> {
    //   if(feedbackItem.id === id){
    //    return {...feedbackItem, count: counter}
    //   }
    // });
    dispatch(increment());
  }
  console.log(feedbacks)

  return (
    <>
      {feedbacks.map((feedback) => {
        return (
            <div key={feedback.id} className="suggestion_container">
              <div className="suggestion_content">
                <div className="container_number_content">
                  <button
                    className={`number ${voted && "voted"}`}
                    onClick={()=>handleVote(feedback.id)}
                    
                  >
                    <i className="fa-solid fa-angle-up"></i>
                    <p>{counter}</p>
                  </button>
                  <Link to={`/feedback-detail/${feedback.id}`} style={{ textDecoration: "none" }}> 
                  <div className="content">
                    <h4>{feedback.title}</h4>
                    <p>{feedback.details}</p>
                    <button>{feedback.tag}</button>
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


