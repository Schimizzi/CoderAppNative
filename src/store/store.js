import { configureStore } from "@reduxjs/toolkit";
import counterSliceReduce from "../features/counter/CounterSlice";



export default configureStore ({
    reducer: {
        counter: counterSliceReduce,
        category: counterSliceReduce,
        product: counterSliceReduce,
    }
})
