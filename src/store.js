import { configureStore } from "@reduxjs/toolkit";
import feedbacksSlice from "./features/feedbacksSlice";
const store = configureStore({
  reducer: {
    feedbacks: feedbacksSlice,
  },
});

export default store;
