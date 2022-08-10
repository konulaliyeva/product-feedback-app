import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/features/counterSlice";
import feedbacksSlice from "./components/features/feedbacksSlice";
const store = configureStore({
  reducer: {
    feedbacks: feedbacksSlice,
    counter: counterSlice,
  },
});

export default store;
