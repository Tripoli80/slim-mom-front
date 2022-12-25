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

export const fetchDaily = createAsyncThunk(
  'daily/getDaily',
  async ({ date, token }, thunkAPI) => {
    try {
      const response = await axios.post(`api/daily?${date}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const requestActions = [fetchDaily];
const isPendingActions = isPending(...requestActions);
const isFulfilledActions = isFulfilled(...requestActions);
const isRejectedActions = isRejected(...requestActions);

export const dailySlice = createSlice({
  name: 'daily',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: buider =>
    buider
      .addCase(fetchDaily.fulfilled, (state, action) => {
        state.items = action.payload;
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
