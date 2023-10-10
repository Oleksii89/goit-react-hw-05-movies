import Searchbar from 'components/Searchbar/Searchbar';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from 'components/MovieList/MovieList';

export const Movies = () => {
  return (
    <>
      <main>
        <Searchbar></Searchbar>

        <MovieDetails></MovieDetails>
      </main>
    </>
  );
};
