import React, { useState } from "react";
import FeedbackBoard from "./components/HomePage/FeedbackBoard";
import Category from "./components/HomePage/Category";
import Roadmap from "./components/HomePage/Roadmap";
import Header from "./components/HomePage/Header";
import Body from "./components/HomePage/Body";
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
        <Body />
        <Body />
      </div>
    </div>
  );
}

export default HomePage;
