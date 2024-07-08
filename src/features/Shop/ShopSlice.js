import { createSlice } from "@reduxjs/toolkit";

export const ShopSliceReduce = createSlice({
    name: 'shop',
    initialState: {
        value: {
            cate1: '',
            item1: '',
        },
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.cate1 = action.payload;
        },
        setItemSelected: (state, {payload}) => {
            state.value.item1 = payload;
        },
    }
})

export const { setCategorySelected, setItemSelected} = ShopSliceReduce.actions;
export default ShopSliceReduce.reducer