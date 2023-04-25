import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addtocart(state, action) {},
    removefromcart(state, action) {},
  },
});

export default productSlice.reducer;
