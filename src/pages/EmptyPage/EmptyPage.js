import React from "react";
import Header from "../../components/Header";
import FeedbackBoard from "../HomePage/Banners";
import Categories from "../../components/Categories";
import Roadmaps from "../../components/Roadmaps";
import EmptyPageBody from "./EmptyBageBody";


function EmptyPage(){
    return(
        <div className="container wrap_home">
        <div className="page_left">
            <FeedbackBoard />
            <Categories />
            <Roadmaps />

        </div>
        <div className="page_right">
            <Header />
            <EmptyPageBody />
        </div>
      </div>
    )
}

export default EmptyPage;