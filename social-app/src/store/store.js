import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice';
import userReducer from './userSlice';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
    posts: postsReducer,
  },
})