import { createSlice } from "@reduxjs/toolkit";
const initialState={
    counter:0,
    isClicked: false,
  }

  export const counterSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
          increment: (state)=>{
              state.counter +=1;
              state.isClicked = true;
          },
          decrement: (state)=>{
            state.counter -=1;
        }

      }
  });
  export const {increment, decrement} = counterSlice.actions;
  export default counterSlice.reducer;