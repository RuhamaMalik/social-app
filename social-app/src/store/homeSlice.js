import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    users: [],
    posts: [],
    comments: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setUsers, setPosts, setComments } = homeSlice.actions;
export default homeSlice.reducer;
