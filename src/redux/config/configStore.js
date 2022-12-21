import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../modules/postsSlice";
import userSlice from "../modules/userSlice";
import commentsSlice from "../modules/commentSlice"
import postsSlice2  from '../modules/postsSlice2';

const store = configureStore({
  reducer: { postsSlice2, postsSlice, userSlice, commentsSlice },
});

export default store;
