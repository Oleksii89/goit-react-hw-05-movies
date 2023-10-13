import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendinghMovies } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const moviesData = await getTrendinghMovies();

        setMovies(moviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      <h1>Trending today</h1>
      <MovieList movies={movies}></MovieList>
    </>
  );
};

export default HomePage;
