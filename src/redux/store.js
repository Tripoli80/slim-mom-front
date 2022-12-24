import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { modalReducer } from './services/modalSlice';
import { filterSlice } from './services/filterSlice';
import { diaryApi } from './services/createApi';
import { languageSlice } from './services/languageSlice';
import { productsReducer } from './products/slice';
import { dailySlice } from './services/privateDailySlice';
import { dietSlice } from './services/privateDietSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'userAuthMZ',
  storage,
  whitelist: ['token', 'currentPath'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [diaryApi.reducerPath]: diaryApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [languageSlice.name]: languageSlice.reducer,
    modal: modalReducer,
    products: productsReducer,
    daily: dailySlice.reducer,
    diet: dietSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    diaryApi.middleware,
  ],
});

export const persistor = persistStore(store);
