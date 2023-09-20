import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import pathReducer from './pathSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    path: pathReducer,
  },
});

export default appStore;
