import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../modules/postsSlice";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: { postsSlice, userSlice },
});

export default store;
