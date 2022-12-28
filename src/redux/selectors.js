export const getIsLoading = state => state.auth.isLoggedIn;

export const selectDiet = state => state.diet.items;

export const selectPersonalDiet = state => state.diet.personalDiet;

export const selectBodyData = state => state.diet.bodyData;

export const getLanguage = state => state.language;
