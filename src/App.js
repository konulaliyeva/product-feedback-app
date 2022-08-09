import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Feedback from "./Feedback";
import axios from "axios";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import RoadmapPage from "./components/RoadmapPage/RoadmapPage";
import FeedbackDetail from "./components/FeedbackDetailPage/FeedbackDetail";
import SingleReply from "./components/FeedbackDetailPage/SingleReply";
import EditFeedback from "./components/EditFeedbackPage/EditFeedback";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/empty" element={<EmptyPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/feedback-detail" element={<FeedbackDetail />}>
          <Route path=":single-reply" element={<SingleReply />} />
        </Route>
        <Route path="/edit-feedback" element={<EditFeedback/>} />
      </Routes>
    </>
  );
}

export default App;
