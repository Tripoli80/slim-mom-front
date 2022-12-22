// import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.items;

// export const selectFilter = state => state.products.filter;

// export const selectIsLoading = state => state.products.isLoading;

// export const selectError = state => state.products.error;

// export const selectFilteredProducts = createSelector(
//   [selectProducts, selectFilter],
//   (items, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return items.filter(c => c.name.toLowerCase().includes(normalizedFilter));
//   }
// );

//TODO
//Filter - from date component value
