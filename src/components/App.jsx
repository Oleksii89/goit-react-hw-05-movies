// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
