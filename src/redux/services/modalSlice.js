import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  contactId: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    contactId: (state, action) => {
      state.contactId = action.payload;
    },
  },
});

export const { openModal, closeModal, contactId } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
