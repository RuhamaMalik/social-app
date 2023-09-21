import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    allPosts: null, 
  },
  reducers: {
    addPost: (state, action) => {
      state.allPosts = action.payload;
    //   state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;

// export const selectAllPosts = (state) => state.post.allPosts;
// export const selectPostsByUser = (state, userId) =>
//   state.post.posts.filter((post) => post.userId === userId);

export default postSlice.reducer;
