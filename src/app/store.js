import { configureStore } from "@reduxjs/toolkit";

//Reducers
import userReducer from "../reducers/users/userSlice";
import cartReducer from "../reducers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
