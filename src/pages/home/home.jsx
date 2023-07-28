
import { getTrendsMovies } from 'components/Api/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React from 'react';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const Home = () => {
     const [movies, setMovies] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() =>{
        const fetchTrendsMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrendsMovies();
        const movies = data.results;
        setMovies(movies);
      } catch (error) {
        setHasError(true);
        console.error(error);
        setError();
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendsMovies();
  }, []);
    
     
  return (
    <div>
      <main>
        {movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading}
        {hasError && Notify.failure(`${error}`)}
      </main>
    </div>
  );
};
export default Home