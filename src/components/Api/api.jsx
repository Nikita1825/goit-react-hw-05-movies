import axios from 'axios';
export const getTrendsMovies = async() => {
    const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=183c3cacc9c38c09c14d38798ccfe9d7"
      try {
    const { data } = await axios.get(url);
    return  data;
  } catch (error) {
    console.log(error);
    
  }
}
export const getMovieDetails = async (movieId) => {
  const url =
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=183c3cacc9c38c09c14d38798ccfe9d7`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=183c3cacc9c38c09c14d38798ccfe9d7&query=${query}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=183c3cacc9c38c09c14d38798ccfe9d7`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=183c3cacc9c38c09c14d38798ccfe9d7`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};