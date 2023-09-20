import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './homeSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
  },
})