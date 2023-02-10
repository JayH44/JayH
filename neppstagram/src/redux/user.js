import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from '../api/auth';

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchUser',
  getCurrentUser
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = true;
      });
  },
});

export default userSlice;
