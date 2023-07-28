import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar"
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovies } from "components/Api/api";


const Movies = () => {
      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

      const handleSubmit = query => {
        if (!query) {
          return Notify.failure('Please, write something');
        }
        setSearchParams({ query: query.trim() });
    };
    
     useEffect(() => {
       const getImagesFromAPI = async query => {
         try {
           setIsLoading(true);
           const data = await getSearchMovies(query);
           if (data.results.length === 0) {
             return Notify.failure('There is no movies with this title');
           }
           setMovies(data.results);
         } catch (error) {
           setError(true);
           console.error(error);
         } finally {
           setIsLoading(false);
         }
       };

       const searchValue = searchParams.get('query');
       if (searchValue) {
         getImagesFromAPI(searchValue);
       }
     }, [searchParams]);
         
    
    
        
    return (
      <div>
        <Searchbar onSubmit={handleSubmit} />
        {movies.length > 0 && <MoviesList movies={movies} />}
      </div>
    );
}
export default Movies