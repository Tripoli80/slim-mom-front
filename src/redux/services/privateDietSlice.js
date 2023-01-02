import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchDiet = createAsyncThunk(
  'diet/getDiet',
  async (bodyData, thunkAPI) => {
    try {
      const response = await axios.post('api/diet/', bodyData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const requestActions = [fetchDiet];
const isPendingActions = isPending(...requestActions);
const isFulfilledActions = isFulfilled(...requestActions);
const isRejectedActions = isRejected(...requestActions);

export const dietSlice = createSlice({
  name: 'diet',
  initialState: {
    bodyData: {blood: 1, height: 168, age: 38, cWeight: 83, dWeight: 70},
    items: {},
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