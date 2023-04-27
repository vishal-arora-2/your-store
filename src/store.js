import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import cartSlice from "./slice/cartSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: cartSlice,
  },
});

export default store;
