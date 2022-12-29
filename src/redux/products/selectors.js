export const selectSelectedProducts = state => state.products.selectedProduct;

export const selectEtedProductsByDate = state => state.products.eatedProducts;

export const selectDate = state => state.products.date;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

export const selectCategories = state => state.products.recomendetToNotEat;

export const selectPersonalDiet = state => state.products.personalDiet;
