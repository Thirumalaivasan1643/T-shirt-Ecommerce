
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  cart: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const id = action.payload;

      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter(
          (item) => item !== id
        );
      } else {
        state.wishlist.push(id);
      }
    },

    addToCart: (state, action) => {
      const { product, size } = action.payload;

      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          size,
          quantity: 1,
        });
      }
    },
  },
});

export const { toggleWishlist, addToCart } =
  shopSlice.actions;

export default shopSlice.reducer;
