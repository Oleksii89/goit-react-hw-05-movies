import Searchbar from 'components/Searchbar/Searchbar';
import MovieDetails from '../MovieDetails/MovieDetails';

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
