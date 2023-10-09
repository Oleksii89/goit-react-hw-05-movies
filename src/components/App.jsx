import { Container, Header } from 'components/App.styled';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Home } from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
};
