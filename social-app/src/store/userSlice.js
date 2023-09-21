import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        allUsers: null,
        user: null,
        isAuthenticated: false,

    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        setAllUser: (state, action) => {
            state.allUsers = action.payload;
        },

    },
});

export const { setUser, clearUser, setAllUser } = userSlice.actions;
// export const allUsers = (state) => state.useSelector.allUsers;
export default userSlice.reducer;
