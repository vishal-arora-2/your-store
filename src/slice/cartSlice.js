import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    totalQuantity: localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : [],
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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
    },
    removeFromCart(state,action){
      var s=0
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      )
      nextCartItems.map((qa)=>{
        s+=qa.quantity
      })
        state.cartItems = nextCartItems;
        state.totalQuantity = s;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
        return state;
    },
    removeAllFromcart(state,action){ 
      state.cartItems=[]
      state.totalQuantity=0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));

    },
    decreaseCart(state,action){
      const indexItem= state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
        if(state.cartItems[indexItem].quantity > 1){
          state.cartItems[indexItem].quantity--;
          state.totalQuantity--;
        }
        else if(state.cartItems[indexItem].quantity===1){
          var s=0;
          const nextCartItems = state.cartItems.filter(
            cartItems => cartItems.id !== action.payload.id
          )
          nextCartItems.map((qa)=>{
            s+=qa.quantity
          })
            state.cartItems = nextCartItems;
            state.totalQuantity = s;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
    },
  },
  
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;



