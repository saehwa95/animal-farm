import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../modules/postsSlice";
import userSlice from "../modules/userSlice";
import commentsSlice from "../modules/commentSlice"

const store = configureStore({
  reducer: { postsSlice, userSlice, commentsSlice },
});

export default store;
