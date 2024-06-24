import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'carrito',
  initialState: {
    value: 0,
    categoryName: 'none',
    productName: 'none',
    
  },
  reducers: {
    /* increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    }, */
    settingValue: (state, action) => {
      state.value = action.payload
    },
    categoryName: (state, action) => {
      state.categoryName = action.payload
    },
    productName: (state, action) => {
      state.productName = action.payload
    },
  },
})


export const {increment, decrement, reset, settingValue, categoryName, productName} = counterSlice.actions
export default counterSlice.reducer