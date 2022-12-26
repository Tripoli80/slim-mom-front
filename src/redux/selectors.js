export const getIsLoading = state => state.auth.isLoggedIn;

export const selectDiet = state => state.diet.items;

export const selectDaily = state => state.daily.items;

export const selectToken = state => state.auth.token;

export const getLanguage = state => state.language;
