import React from "react";
import Body from "./components/HomePage/Body";
import Category from "./components/HomePage/Categroy";
import FeedbackBoard from "./components/HomePage/FeedbackBoard";
import Header from "./components/HomePage/Header";
import Roadmap from "./components/HomePage/Roadmap";
import "./HomePage.css"
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
