import { addProduct, removeProduct } from './operations';
import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

const productsInitState = {
  items: [
    {
      id: '5d51694802b2373622ff5513b',
      weight: 100,
      title: 'Яйце куряче (жовток сухий)',
      calories: 623,
      date: '2022-12-10T12:05:45',
    },
    {
      id: '5d51694802b2373622ff5254d',
      weight: 100,
      title: 'Горох маш Ярмарка Платинум',
      calories: 312,
      date: '2022-12-10T12:05:45',
    },
    {
      id: '5d51694802b2373622ff3555c',
      weight: 100,
      title: 'Гречана крупа (ядриця) зелена',
      calories: 296,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d51694802b23713622ff553b',
      weight: 100,
      title: 'Яйце куряче (жовток сухий)',
      calories: 623,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d516948102b2373622ff554d',
      weight: 100,
      title: 'Горох маш Ярмарка Платинум',
      calories: 312,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d51694802b23731622ff555c',
      weight: 100,
      title: 'Гречана крупа (ядриця) зелена',
      calories: 296,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d516948102b2373622ff553b',
      weight: 100,
      title: 'Яйце куряче (жовток сухий)',
      calories: 623,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d51694802b23731622ff554d',
      weight: 100,
      title: 'Горох маш Ярмарка Платинум',
      calories: 312,
      date: '2022-12-22T12:05:45',
    },
    {
      id: '5d511694802b2373622ff555c',
      weight: 100,
      title: 'Гречана крупа (ядриця) зелена',
      calories: 296,
      date: '2022-12-22T12:05:45',
    },
  ],

  date: null,
  isLoading: false,
  error: null,
};

const requestActions = [addProduct, removeProduct];
const isPendingActions = isPending(...requestActions);
const isFulfilledActions = isFulfilled(...requestActions);
const isRejectedActions = isRejected(...requestActions);

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },

  extraReducers: buider =>
    buider
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(c => c.id === action.payload);
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(isFulfilledActions), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(isPendingActions), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(isRejectedActions), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setDate } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
