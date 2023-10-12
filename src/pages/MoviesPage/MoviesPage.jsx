import { Loader } from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { Suspense } from 'react';

const MoviesPage = () => {
  return (
    <Suspense fallback={Loader}>
      <main>
        <Searchbar></Searchbar>
      </main>
    </Suspense>
  );
};

export default MoviesPage;
