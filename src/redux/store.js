import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { modalReducer } from './services/modalSlice';
import { languageSlice } from './services/languageSlice';
import { productsReducer } from './products/slice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [languageSlice.name]: languageSlice.reducer,
    modal: modalReducer,
    products: productsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
