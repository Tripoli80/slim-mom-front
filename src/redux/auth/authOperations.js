import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const { URL_DB } = process.env;

axios.defaults.baseURL = 'https://creepy-tan-parrot.cyclic.app2/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async userData => {
  console.log(
    '🚀 ~ file: authOperations.js:18 ~ register ~ userData',
    userData
  );
  try {
    const { data } = await axios.post('api/users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('api/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('api/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
