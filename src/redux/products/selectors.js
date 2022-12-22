import { createSelector } from '@reduxjs/toolkit';
import moment from 'moment';

export const selectProducts = state => state.products.items;

export const selectDate = state => state.products.date;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectDate],
  (items, date) => {
    return items.filter(c => moment(c.date).format('DD.MM.YYYY') === date);
  }
);
