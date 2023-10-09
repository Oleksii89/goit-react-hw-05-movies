import { useState } from 'react';
import { Form } from 'react-router-dom';

const Searchbar = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleChange = evt => {
    setSearchMovie(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={searchMovie}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
