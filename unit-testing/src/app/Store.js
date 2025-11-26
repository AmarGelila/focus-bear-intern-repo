import { configureStore } from "@reduxjs/toolkit";
import counterReucer from "../features/Counter/counterSlice";
import postsReducer from "../features/Posts/postsSlice";
export const store = configureStore({
  reducer: {
    counter: counterReucer,
    posts: postsReducer,
  },
});
