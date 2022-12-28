import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import defaultsBaseURL from '../../redux/auth/authOperations';

axios.defaults.baseURL = defaultsBaseURL;

export const getProductsByDate = createAsyncThunk(
  'products/getByDate',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/daily?date=${date}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsByTitle = createAsyncThunk(
  'products/fetchAll',
  async (title, thunkAPI) => {
    try {
      const { data } = await axios.get(`api/products?product=${title}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// {
//     "product":"5d51694802b2373622ff56cf",
//     "weight":100,
//     "date":"2022-12-24"
// }
export const addEatedProduct = createAsyncThunk(
  'products/addEatedProduct',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post('api/daily/addeated', product);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeEatedProduct = createAsyncThunk(
  'products/removeEatedProduct',
  async (idToRemove, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/daily/${idToRemove}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dailyCalorie = createAsyncThunk(
  'products/dailyCalorie',
  async (stats, thunkAPI) => {
    try {
      const { data } = await axios.post(`api/diet/`, stats);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPersonalDiet = createAsyncThunk(
  'diet/fetchPersonalDiet',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/diet');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async (newProduct, thunkAPI) => {
    try {
      const { data } = await axios.post('api/products', newProduct);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
