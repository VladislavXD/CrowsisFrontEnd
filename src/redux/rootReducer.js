const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return [...state, action.payload];
      case 'REMOVE_FROM_FAVORITES':
        return state.filter(product => product.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  