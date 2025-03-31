import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // removeItem: (state, action) => {
    //   state.items.pop();
    // },
    removeItem: (state, action) => {
      const id = action.payload?.card?.info?.id;
      state.items = state.items.filter((item) => item.card.info.id !== id);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
