import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;
