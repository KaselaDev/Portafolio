import { createSlice } from '@reduxjs/toolkit';

const lenguageSlice = createSlice({
  name: 'lenguage',
  initialState: 'ES', // Estado inicial
  reducers: {
    toggleLenguage: (state) => (state === "ES" ? "US" : "ES"),
  },
});

export const { toggleLenguage } = lenguageSlice.actions;
export default lenguageSlice.reducer;