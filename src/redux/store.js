import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/FavoriteSlice';
import { authReducer } from './slices/authSlice';

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
