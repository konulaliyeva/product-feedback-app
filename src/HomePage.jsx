import React, { useState } from "react";
import FeedbackBoard from "./Components/HomePage/FeedbackBoard";
import Category from "./Components/HomePage/Category";
import Roadmap from "./Components/HomePage/Roadmap";
import Header from "./Components/HomePage/Header";
import Body from "./Components/HomePage/Body";
import "./HomePage.css";
import Button from "./Components/Utils/Button";

function HomePage() {
  

  return (
    <div className="container wrap_home">
      <div className="page_left">
        <FeedbackBoard />
        <Category />
        <Roadmap />
      </div>
      <div className="page_right">
        <Header />
        <Body />
       <Body />
        <Body /> 
        
      </div>
    </div>
  );
}

export default HomePage;
