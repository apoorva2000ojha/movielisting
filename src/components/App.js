import React, { useState, useEffect } from "react";
import AddFavorite from "./AddFavorite";
import FavoriteList from "./FavoriteList";
import "./App.css"

const API_KEY = "330d47ca"; 
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
    const [movies, setMovies] = useState([
       
		{
			Title: 'Star Wars: Episode V - The Empire Strikes Back',
			Year: '1980',
			imdbID: 'tt0080684',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'Star Wars: Episode VI - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086190',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		},
        {
			Title: 'Star Wars: Episode VI - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086190',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		},
	]);
      

  const [searchTerm, setSearchTerm] = useState("");
  const fetchRandomMovies = async () => {
    let randomMovies = [];
    let fetchedIds = []; 
    for (let i = 0; i < 10; i++) {
      let randomId = Math.floor(Math.random() * 1000000); 
      if (fetchedIds.includes(randomId)) {
        i--; 
        continue;
      }
      try {
        let response = await fetch(`${BASE_URL}&i=tt${randomId}`); 
        let data = await response.json();
        if (data.Response === "True") {
          randomMovies.push(data);
          fetchedIds.push(randomId);
        } else {
          i--; 
        }
      } catch (error) {
        console.error(error); 
      }
    }
    setMovies(randomMovies);
  };
 
 
  const fetchMoviesBySearch = async () => {
    let response = await fetch(`${BASE_URL}&s=${searchTerm}`); 
    let data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search.slice(0, 10));
    } else {
      alert(data.Error); 
    }
  };

  useEffect(() => {
    fetchRandomMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter movie title" />
      <button onClick={fetchMoviesBySearch}>Search</button>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
<div>
<FavoriteList/>
<AddFavorite/>
</div>
export default App;