import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    settingValue: (state, action) => {
      state.value = action.payload
    },
  },
})


export const {increment, decrement, reset, settingValue} = counterSlice.actions
export default counterSlice.reducer