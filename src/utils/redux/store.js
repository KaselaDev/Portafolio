import { configureStore } from '@reduxjs/toolkit';
import lenguageReducer from './slices/lenguageSlice';

const store = configureStore({
  reducer: {
    lenguage: lenguageReducer, 
  },
});

export default store;