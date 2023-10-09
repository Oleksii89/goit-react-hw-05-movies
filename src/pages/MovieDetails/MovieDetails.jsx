import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <main>
      <p>Additional information</p>
      <ul>
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
