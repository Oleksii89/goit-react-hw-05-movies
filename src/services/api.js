import axios from 'axios';

const API_KEY = '3373af60a4ee1fe7510a1a61c11380e1';

export const getTrendinghMovies = async () => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  console.log(data.results);
  return data.results;
};

export const getMovieByQuerry = async query => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&page=1&language=en-US`);
  console.log(data.results);
  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  console.log(data);
  return data;
};
