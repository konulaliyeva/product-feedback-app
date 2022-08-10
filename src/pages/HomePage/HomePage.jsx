import React, { useState } from "react";
import FeedbackBoard from "./FeedbackBoard";
import Category from "./Category";
import Roadmap from "./Roadmap";
import Header from "./Header";
import Body from "./Body";
import "./HomePage.css";

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
      </div>
    </div>
  );
}

export default HomePage;
