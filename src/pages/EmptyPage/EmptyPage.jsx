import React from "react";
import Header from "../HomePage/Header";
import FeedbackBoard from "../HomePage/FeedbackBoard";
import Category from "../HomePage/Category";
import Roadmap from "../HomePage/Roadmap";
import EmptyPageBody from "./EmptyBageBody";


function EmptyPage(){
    return(
        <div className="container wrap_home">
        <div className="page_left">
            <FeedbackBoard />
            <Category />
            <Roadmap />

        </div>
        <div className="page_right">
            <Header />
            <EmptyPageBody />
        </div>
      </div>
    )
}

export default EmptyPage;