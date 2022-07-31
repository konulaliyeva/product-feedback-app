import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Feedback from "./Feedback";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
 
  );
}

export default App;
