import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          quantity: 1,
          ...newItem,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
    },
    removeFromCart(state,action){
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
        state.cartItems = nextCartItems;
    },
    removeAllFromcart(state,action){ 
      state.cartItems=[]
      state.totalQuantity=0;
    },
    decreaseCart(state,action){
      const indexItem= state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
        if(state.cartItems[indexItem].quantity > 1){
          state.cartItems[indexItem].quantity--;
        }
        else if(state.cartItems[indexItem].quantity===1){
          const nextCartItems = state.cartItems.filter(
            cartItems => cartItems.id !== action.payload.id
          )
            state.cartItems = nextCartItems;
        }
    },
  },
  
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
