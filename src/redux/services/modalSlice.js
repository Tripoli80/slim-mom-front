import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selector: '',
  contactId: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    selector: (state, action) => {
      state.selector = action.payload;
    },
    contactId: (state, action) => {
      state.contactId = action.payload;
    },
  },
});

export const { selector, contactId } = modalSlice.actions;

export const ModalReducer = modalSlice.reducer;
