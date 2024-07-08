import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'carrito',
  initialState: {
    value: {
      user: "userIdLogged",
      updateAt: new Date().toLocaleString(),
      total: null,
      items: [],
    },
    categoryName: 'none',
    productName: 'none',
  },
  reducers: {
    addCartItem: (state, { payload }) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === payload.id
      );
      if (productRepeated) {
        console.log(productRepeated);
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === payload.id) {
            item.quantity += payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0
        );
        state.value = { ...state.value, items: itemsUpdated, total, updateAt: new Date().toLocaleString() };
      } else {
        state.value.items.push(payload);
        const total = state.value.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);
        state.value = { ...state.value, total, updateAt: new Date().toLocaleString() };
      }
    },
    removeCartItem: (state, { payload }) => {
      const itemsUpdated = state.value.items.filter(item => item.id !== payload.id);
      const total = itemsUpdated.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0
      );
      state.value = { ...state.value, items: itemsUpdated, total, updateAt: new Date().toLocaleString() };
    },
    settingValue: (state, action) => {
      state.value = action.payload;
    },
    categoryName: (state, action) => {
      state.categoryName = action.payload;
    },
    productName: (state, action) => {
      state.productName = action.payload;
    },
  },
});

export const { addCartItem, removeCartItem, settingValue, categoryName, productName } = counterSlice.actions;
export default counterSlice.reducer;
