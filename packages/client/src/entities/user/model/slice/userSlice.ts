import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadUserData } from '../services';
import { UserSchema, User } from '../types';

const initialState: UserSchema = {
  isLoading: false,
  isInitialized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<User>) => {
      state.data = payload;
    },
    clearUser: (state) => {
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadUserData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.isInitialized = true;
    });
    builder.addCase(loadUserData.rejected, (state) => {
      state.isLoading = false;
      state.isInitialized = true;
    });
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
