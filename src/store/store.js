import { configureStore } from "@reduxjs/toolkit";
import counterSliceReduce from "../features/counter/CounterSlice";
import { shopApi } from "../presentation/services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
  reducer: {
    counter: counterSliceReduce,
    category: counterSliceReduce,
    product: counterSliceReduce,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch)

export default store

