import React from "react";
import Categories from "../../components/Categories";
import Roadmaps from "../../components/Roadmaps";
import Header from "../../components/Header";
import Body from "./Body";
import "./HomePage.css";
import Banner from "./Banners";

function HomePage() {
  return (
    <div className="container wrap_home">
      <div className="page_left">
        <Banner/>
        <Categories />
        <Roadmaps />
      </div>
      <div className="page_right">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default HomePage;
