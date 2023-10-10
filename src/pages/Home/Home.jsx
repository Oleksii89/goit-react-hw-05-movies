import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendinghMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendinghMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies}></MovieList>
    </>
  );
};
