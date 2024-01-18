import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.list = state.list.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
