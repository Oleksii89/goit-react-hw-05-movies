import { Loader } from 'components/Loader/Loader';
import { BASE_POSTER_URL, DEFAULTIMG } from 'helper/helper';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';

const CastPage = () => {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchCastMovie = async () => {
      try {
        setIsLoading(true);

        const castData = await getCastMovie(movieId);

        setMovieCasts(castData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      {movieCasts !== null && (
        <ul>
          {movieCasts.map(movieCast => (
            <li key={movieCast.id}>
              <img
                src={`${
                  movieCast.profile_path
                    ? BASE_POSTER_URL + movieCast.profile_path
                    : DEFAULTIMG
                }`}
                alt="poster"
                width={150}
              />
              <p>{movieCast.name}</p>
              <p>Character {movieCast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CastPage;
