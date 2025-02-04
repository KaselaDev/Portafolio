import { configureStore } from '@reduxjs/toolkit';
import lenguageReducer from './slices/lenguageSlice';
import sectionReducer from './slices/sectionSlice';

const store = configureStore({
  reducer: {
    lenguage: lenguageReducer, 
    section: sectionReducer,
  },
});

export default store;