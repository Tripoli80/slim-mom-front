import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://creepy-tan-parrot.cyclic.app/';

// must create new record with fieds id, name, weight, calories, owner, date
// return fieds id, name, weight, calories
export const addProduct = createAsyncThunk(
  'daily/addProduct',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post('api/daily', product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// must remove record with id
// return fieds id, name ?
export const removeProduct = createAsyncThunk(
  'daily/removeProduct',
  async (idToRemove, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/daily/${idToRemove}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
