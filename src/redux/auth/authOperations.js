import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const defaultsBaseURL = 'https://creepy-tan-parrot.cyclic.app/';
// export const defaultsBaseURL = 'http://localhost:3008/';

axios.defaults.baseURL = defaultsBaseURL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const longtoken = {
  set(longtoken) {
    axios.defaults.headers.common.Authorization = `Bearer ${longtoken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async userData => {
  try {
    const { data } = await axios.post('api/users/signup', userData);
    token.set(data.token);
    longtoken.set(data.longtoken);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('api/users/login', userData);
    token.set(data.token);
    longtoken.set(data.longtoken);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const forgotPassword = createAsyncThunk('auth/mailtoreset', async userData => {
  try {
    const { data } = await axios.post('api/users/mailtoreset', userData);
    token.set(data.token);
    longtoken.set(data.longtoken);
    return data;
  } catch (error) {
    console.log(error);
  }
);
export const resetPassword = createAsyncThunk(
  'auth/resetpassword',
  async () => {}
);
export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('api/users/logout');
    token.unset();
    longtoken.unset();
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

export default defaultsBaseURL;
