import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  login,
  logOut,
  refreshUser,
} from './authOperations';

const initialState = {
  user: { username: null, email: null },
  token: null,
  longtoken: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'currentPath'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    google: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.longtoken = action.payload.longtoken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
  extraReducers: buider => {
    buider
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.longtoken = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.longtoken = action.payload.longtoken;
          state.isLoggedIn = true;
        }
      );
  },
});

export const { google } = authSlice.actions;

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
