import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFeedbacks } from "../../components/features/feedbacksSlice";
import { increment, decrement } from "../../components/features/counterSlice";
function Body() {
  const dispatch = useDispatch();
  const { feedbacks, loading, error } = useSelector((state) => state.feedbacks);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, []);

  const counter = useSelector((state) => state.counter.counter);
  const voted = useSelector(state=> state.counter.isClicked);

  function handleVote (id){
    let targetedVote= feedbacks.find(feedbackItem=> feedbackItem.id === id);
    console.log(targetedVote);
    dispatch(increment());
  }
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
                  <Link to="/feedback-detail" style={{ textDecoration: "none" }}> 
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


