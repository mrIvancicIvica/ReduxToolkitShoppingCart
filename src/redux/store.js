import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartSlice";
import dialogReducer from "./modal/Dialog";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dialog: dialogReducer,
  },
});
