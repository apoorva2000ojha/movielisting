import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../actions/favoriteActions';

function FavoriteList() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  function handleRemove(movie) {
    dispatch(removeFavorite(movie));
  }

  return (<div>
    {favorites.map((movie) => (
      <div key={movie.imdbID}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <button onClick={() => handleRemove(movie)}>Remove</button>
      </div>
    ))}
  </div>
 );
}

export default FavoriteList; 
