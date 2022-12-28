import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import axios from 'axios';
import defaultsBaseURL from '../../redux/auth/authOperations';

axios.defaults.baseURL = defaultsBaseURL;

export const fetchDiet = createAsyncThunk(
  'diet/fetchDiet',
  async (bodyData, thunkAPI) => {
    try {
      const response = await axios.post('api/diet/', bodyData);
      return response.data;
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

const requestActions = [fetchDiet, fetchPersonalDiet];
const isPendingActions = isPending(...requestActions);
const isFulfilledActions = isFulfilled(...requestActions);
const isRejectedActions = isRejected(...requestActions);

export const dietSlice = createSlice({
  name: 'diet',
  initialState: {
    bodyData: {blood: 1, height: 168, age: 38, cWeight: 83, dWeight: 70},
    items: {},
    personalDiet: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setBodyData: (state, action) => {
      state.bodyData = action.payload;
    },
  },
  extraReducers: buider =>
    buider
      .addCase(fetchDiet.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchPersonalDiet.fulfilled, (state, action) => {
        state.personalDiet = action.payload;
      })
      .addMatcher(isAnyOf(isFulfilledActions), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(isPendingActions), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(isRejectedActions), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setBodyData } = dietSlice.actions;