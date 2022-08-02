import React from "react";
import { useState, useEffect } from "react";
import FeedbackBoard from "./Components/HomePage/FeedbackBoard";
import Category from "./Components/HomePage/Categroy";
import Roadmap from "./Components/HomePage/Roadmap";
import Header from "./Components/HomePage/Header";
import "./HomePage.css";

function HomePage() {

  // const [feedbacks, setFeedbacks] = useState([])

  // useEffect(() => {

  

  // }, []);



  return (
    <div className="container wrap_home">
      <div className="page_left">
        <FeedbackBoard />
        <Category />
        <Roadmap />
      </div>
      <div className="page_right">
        <Header />
        {/* <Body /> */}
      </div>
    </div>
  );
}

export default HomePage;
