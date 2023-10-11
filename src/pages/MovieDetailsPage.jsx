import { Loader } from 'components/Loader/Loader';
import { BASE_POSTER_URL, DEFAULTIMG } from 'helper/helper';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async () => {
      try {
        setIsLoading(true);

        const movieData = await getMovieById(movieId);

        setMovieDetails(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      {movieDetails !== null && (
        <div>
          <h1>{movieDetails.original_title}</h1>
          <img
            src={`${
              movieDetails.poster_path
                ? BASE_POSTER_URL + movieDetails.poster_path
                : DEFAULTIMG
            }`}
            alt="poster"
            width={250}
          />
          <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
          <h2>Overview </h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>Additional information</p>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Routes>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </div>
      )}
    </main>
  );
};
