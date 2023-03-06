const initialState = {
    favorites: [],
  };
  
  function favoriteReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(
            (movie) => movie.imdbID !== action.payload.imdbID
          ),
        };
      default:
        return state;
    }
  }
  
  export default favoriteReducer;
  