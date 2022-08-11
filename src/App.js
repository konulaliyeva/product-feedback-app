import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Feedback from "./pages/FeedbackPage/Feedback";
import axios from "axios";
import EmptyPage from "./pages/EmptyPage/EmptyPage";
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage";
import FeedbackDetail from "./pages/FeedbackDetailPage/FeedbackDetail";
import EditFeedback from "./pages/EditFeedbackPage/EditFeedback";

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
        <Route path="/feedback-detail/:id" element={<FeedbackDetail />}/>
        <Route path="/edit-feedback" element={<EditFeedback/>} />
      </Routes>
    </>
  );
}

export default App;
