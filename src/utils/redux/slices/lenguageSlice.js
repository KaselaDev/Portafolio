import { createSlice } from '@reduxjs/toolkit';

const lenguageSlice = createSlice({
  name: 'lenguage',
  initialState: 'es',
  reducers: {
    toggleLenguage: (state) => (state === "es" ? "us" : "es"),
    setLenguage: (state, action) => action.payload,
  },
});

export const { toggleLenguage, setLenguage } = lenguageSlice.actions;
export default lenguageSlice.reducer;