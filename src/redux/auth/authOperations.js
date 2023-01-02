import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    const { username, email, password, setIsLoading } = userData;

    try {
      const { data } = await axios.post('api/users/signup', {
        username,
        email,
        password,
      });
      token.set(data.token);
      longtoken.set(data.longtoken);
      return data;
    } catch (error) {
      if (error.response.data.message === 'Email in use')
         Notiflix.Notify.warning('Email in use');

      return thunkAPI.rejectWithValue({ error: error.message, setIsLoading });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    const { email, password, setIsLoading } = userData;
    try {
      const { data } = await axios.post('api/users/login', { email, password });
      token.set(data.token);
      longtoken.set(data.longtoken);
      return data;
    } catch (error) {
         Notiflix.Notify.warning('Email or password is wrong');

      return thunkAPI.rejectWithValue({ error: error.message, setIsLoading });
    }
  }
);
export const forgotPassword = createAsyncThunk(
  'auth/mailtoreset',
  async (userData, thunkAPI) => {
    const { email, nav, setIsLoading } = userData;
    try {
      const { data } = await axios.post('api/users/mailtoreset', { email });
      setIsLoading(false);
      Notiflix.Notify.success(`${data.message}`);
      nav();
      return data;
    } catch (error) {
      setIsLoading(false);
      if (error.message === 'Request failed with status code 404') {
        return Notiflix.Notify.warning('No user found with this email.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const checkToken = createAsyncThunk(
  'auth/checktoreset',
  async (payload, thunkAPI) => {
    const { token, setNativeToken, setIsChaked } = payload;
    try {
      const { data } = await axios.post('api/users/checktoreset', { token });
      if (data.message === 'Token valid') {
        setNativeToken(true);
        setIsChaked(true);
        return 0;
      }
      setIsChaked(true);
      setNativeToken(false);
      Notiflix.Notify.failure(`${data.message}`);
      return data;
    } catch (error) {
      setIsChaked(true);
      setNativeToken(false);
      if (error.message === 'Request failed with status code 404') {
        return Notiflix.Notify.failure('Not found');
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
      Notiflix.Notify.success(`${data.message}`);
      return data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.get('api/users/logout');
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
