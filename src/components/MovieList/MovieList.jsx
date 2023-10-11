import React from 'react';
import { StyledMovieList } from './MovieList.styled';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </StyledMovieList>
  );
};

export default MovieList;
