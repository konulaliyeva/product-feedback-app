import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../App";

export const insertFeedback = createAsyncThunk(
  "feedbacks/insertFeedback",
  async (data, { dispatch }) => {
    dispatch(addFeedback(data));
    return axiosInstance.post("feedbacks", data);
  }
);

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
};

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    addFeedback(state, action) {
      const newTodo = action.payload;
      state.feedbacks.push(newTodo);
    },
  },
  extraReducers: {
    [insertFeedback.pending]: () => {},
    [insertFeedback.fulfilled]: () => {},
    [insertFeedback.rejected]: () => {},
  },
});

export const { addFeedback } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
