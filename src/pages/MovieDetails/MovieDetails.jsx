import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <main>
      <p>Additional information</p>
      <ul>
        <li>{/* Movie - {movie.title} - {movieId} */}</li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
