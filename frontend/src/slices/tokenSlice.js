import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
      token: 0
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload;
      },
      removeToken: (state) => {
        state.token = 0;
      }
    }
});

export const { setToken, removeToken } = tokenSlice.actions;

export const selectToken = state => state.token.token;

export default tokenSlice.reducer;


