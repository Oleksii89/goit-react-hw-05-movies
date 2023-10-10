import React from 'react';
import { StyledMovieList } from './MovieList.styled';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </StyledMovieList>
  );
};

export default MovieList;
