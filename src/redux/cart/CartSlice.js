import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const res = await axios
    .get("https://fakestoreapi.com/products?limit=6")
    .then((res) => {
      const updateRes = res.data.map((items) => ({
        ...items,
        amount: 1,
      }));
      return updateRes;
    });
  return res;
});

const initialState = {
  cartItems: [],
  amount: 6,
  total: 23,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
  },

  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      (state.isLoading = false), (state.cartItems = action.payload);
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
