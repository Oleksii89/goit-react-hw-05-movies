import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendinghMovies } from 'services/api';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const moviesData = await getTrendinghMovies();

        setMovies(moviesData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {error && <p>error.message</p>}
      <h1>Trending today</h1>
      <MovieList movies={movies}></MovieList>
    </>
  );
};
