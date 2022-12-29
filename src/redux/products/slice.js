import {
  addEatedProduct,
  getProductsByDate,
  getProductsByTitle,
  removeEatedProduct,
  dailyCalorie,
  fetchPersonalDiet,
} from './operations';
import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import moment from 'moment';

const productsInitState = {
  eatedProducts: [],
  selectedProduct: [],
  personalDiet: {},
  date: moment(new Date()).format('YYYY-MM-DD'),
  isLoading: false,
  error: null,
};

const requestActions = [
  addEatedProduct,
  removeEatedProduct,
  dailyCalorie,
  getProductsByDate,
  fetchPersonalDiet,
];
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
    setEatedProducts: state => {
      state.eatedProducts = [];
    },
    setSelectedProduct: state => {
      state.selectedProduct = [];
    },
  },

  extraReducers: buider =>
    buider
      .addCase(getProductsByDate.fulfilled, (state, action) => {
        state.eatedProducts = action.payload;
      })
      .addCase(getProductsByTitle.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(addEatedProduct.fulfilled, (state, action) => {
        state.eatedProducts.push(action.payload);
      })
      .addCase(removeEatedProduct.fulfilled, (state, action) => {
        const index = state.eatedProducts.findIndex(
          ep => ep._id === action.payload._id
        );
        state.eatedProducts.splice(index, 1);
      })
      .addCase(dailyCalorie.fulfilled, (state, action) => {
        state.recomendetToNotEat = action.payload;
      })
      .addCase(fetchPersonalDiet.fulfilled, (state, action) => {
        state.personalDiet = action.payload;
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

export const { setDate, setEatedProducts, setSelectedProduct } =
  productsSlice.actions;

export const productsReducer = productsSlice.reducer;
