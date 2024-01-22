import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const isItemInCart = state.cart.some((item) => item.id === newItem.id);

      if (!isItemInCart) {
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }

      // If the item is already in the cart, return the current state without modification
      return state;
    },
    removeCart: (state, action) => {
      const itemIdToRemove = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== itemIdToRemove),
      };
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
