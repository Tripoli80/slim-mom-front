import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { modalSlice } from './services/modalSlice';
import { filterSlice } from './services/filterSlice';
import { languageSlice } from './services/languageSlice';
import { diaryApi } from './services/createApi';

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
    [modalSlice.name]: modalSlice.reducer,
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
