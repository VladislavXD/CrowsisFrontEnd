import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/FavoriteSlice';
import { authReducer } from './slices/authSlice';
import basketReducer from './slices/BasketSlice'
const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    auth: authReducer, 
    basket: basketReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
