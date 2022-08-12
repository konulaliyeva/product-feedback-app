import { createAsyncThunk} from '@reduxjs/toolkit';
import { axiosInstance } from '../App';
import { addFeedback, postStatus } from '../features/feedbacksSlice';


export const insertFeedback = createAsyncThunk(
  'feedbacks/insertFeedback',
  async (data, { dispatch }) => {
    dispatch(addFeedback(data));
    return axiosInstance.post('feedbacks', data);
  }
);

export const getFeedbacks = createAsyncThunk(
  'feedbacks/getFeedbacks',
  async function () {
    const response = await axiosInstance.get('feedbacks');
    return response.data;
  }
);

