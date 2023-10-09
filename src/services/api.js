import axios from 'axios';

export const fetchMovies = async () => {
  const { data } = await axios.get();
  return data;
};
