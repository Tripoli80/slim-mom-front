import { createSlice } from '@reduxjs/toolkit';

const initialState = !localStorage.getItem('Language') && 'EN';

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageActions: (state, action) => action.payload,
  },
});

export const { setLanguageActions } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;

export const getLanguage = state => state.language;
