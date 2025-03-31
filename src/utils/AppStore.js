import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../utils/CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default AppStore;
