import { createSlice } from '@reduxjs/toolkit';

const sectionSlice = createSlice({
  name: 'section',
  initialState: 'landing',
  reducers: {
    setSection: (state, action) => action.payload,
  },
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;