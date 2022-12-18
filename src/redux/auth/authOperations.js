import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
