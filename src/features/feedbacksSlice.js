import {createSlice } from '@reduxjs/toolkit';
import { getFeedbacks } from '../api/feedbacksAPI';


const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
  suggestionLength: 0,
  counter: 0,
  isClicked: false, 
  status: ''
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    addFeedback(state, action) {
      const newFeedback = action.payload;
      state.feedbacks.push(newFeedback);
    },
    increment: (state, action) => {
      let id = action.payload;
     let feedback = state.feedbacks.find((feedback) => feedback.id === id);
     feedback.counter ++;
    feedback.isClicked = true;
    },
    decrement: (state, action) => {
      let id = action.payload;
      let feedback = state.feedbacks.find((feedback) => feedback.id === id);
      feedback.counter --;
     feedback.isClicked = false;
    }, 
    postStatus(state, action){
      const newStatus = action.payload;
      state.status.push(newStatus);
      }
  
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
    }
  }
});

export const { addFeedback, increment,decrement, postStatus } = feedbacksSlice.actions;
export default feedbacksSlice.reducer;