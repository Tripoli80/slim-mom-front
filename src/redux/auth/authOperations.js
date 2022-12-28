import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

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

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('api/users/signup', userData);
    token.set(data.token);
    longtoken.set(data.longtoken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('api/users/login', userData);
    token.set(data.token);
    longtoken.set(data.longtoken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const forgotPassword = createAsyncThunk(
  'auth/mailtoreset',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('api/users/mailtoreset', userData);
      Notiflix.Notify.success(`${data.message}`);
      return data;
    } catch (error) {
        if (error.message === "Request failed with status code 404") {
          return Notiflix.Notify.warning("No user found with this email.");
        }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const resetPassword = createAsyncThunk(
  'auth/resetpassword',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('api/users/reset', userData);
      token.set(data.token);
      longtoken.set(data.longtoken);
      return data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    token.unset();
    longtoken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default defaultsBaseURL;
