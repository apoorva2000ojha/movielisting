import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../actions/favoriteActions';

function AddFavorite() {
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addFavorite(movie));
    setMovie('');
  }

  function handleMovieChange(event) {
    setMovie(event.target.value);
  }

  return (
    <div>
      <input type="text" value={movie} onChange={handleMovieChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddFavorite;
