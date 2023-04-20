import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
