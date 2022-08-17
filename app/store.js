import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";
import basketSlice from "../Features/basketSlice";
import restaurantSlice from "../Features/restaurantSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
});

export default store;
