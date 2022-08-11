import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../App";
export const insertFeedback = createAsyncThunk(
  "feedbacks/insertFeedback",
  async (data, { dispatch }) => {
    dispatch(addFeedback(data));
    return axiosInstance.post("feedbacks", data);
  }
);

export const getFeedbacks = createAsyncThunk(
  "feedbacks/getFeedbacks",
  async function () {
    const response = await axiosInstance.get("feedbacks");
    return response.data;
  }
);

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
  suggestionLength: 0,
  counter: 0,
  isClicked: false,
};

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    addFeedback(state, action) {
      const newFeedback = action.payload;
      state.feedbacks.push(newFeedback);
    },
    increment: (state) => {
      state.counter += 1;
      state.isClicked = true;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  extraReducers: {
    [getFeedbacks.pending]: (state) => {
      state.loading = true;
    },
    [getFeedbacks.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = action.payload;
    },
    [getFeedbacks.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error!";
    },
  },
});

export const { addFeedback, increment, decrement } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;
