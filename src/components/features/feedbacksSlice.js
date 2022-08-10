import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../App";

export const insertFeedback = createAsyncThunk(
  "feedbacks/insertFeedback",
  async (data, { dispatch }) => {
    dispatch(addFeedback(data));
    return axiosInstance.post("feedbacks", data);
  }
);

export const getFeedbacks = createAsyncThunk(
  'feedbacks/getFeedbacks',
  async function () {
    const response = await axiosInstance.get('feedbacks');
    return response.data;
  }
);

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
  suggestionLength: 0,
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
    [getFeedbacks.pending]: (state) => {
      state.loading = true;
    },
    [getFeedbacks.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = action.payload;
    },
    [getFeedbacks.rejected]: (state, action) => {
      state.loading = false;
      state.error = 'error!';
    },
  },
});



export const { addFeedback } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;

