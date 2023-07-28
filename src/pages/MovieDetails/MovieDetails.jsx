import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useParams,Outlet  } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieDetails } from 'components/Api/api';
import css from "./details.module.css"
import defaultImage from "../../image/images.jpg"

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [instantMovie, setInstantMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');


     useEffect(() => {
       const getMovieById = async () => {
         try {
           setIsLoading(true);
           const data = await getMovieDetails(id);
           if (data === null) {
             return Notify.failure('Oops! Something went wrong!');
           }
           setInstantMovie(data);
         } catch (error) {
           setError(true);
           console.error(error);
         } finally {
           setIsLoading(false);
         }
       };
       getMovieById();
     }, [id]);
    
    const posterUrl = instantMovie?.poster_path
      ? `https://image.tmdb.org/t/p/w200${instantMovie.poster_path}`
      : defaultImage;
    
  const userScore = instantMovie ? instantMovie.vote_average * 10 : null;

    return (
      <main>
        {error && <p>Oops! Something went wrong!</p>}
        <Link className={css.goBack} to={backLinkHref.current}>
          <button className={css.back}>← Go back</button>
        </Link>
        {instantMovie && (
          <div>
            <div>
              <img src={posterUrl} alt="error" />
              <h2>{instantMovie.original_title}</h2>
              <p>User Score: {userScore}%</p>
              <h2>Overview</h2>
              <p>{instantMovie.overview ?? 'There is no review'}</p>
              <h2>Genres</h2>
              <p>{instantMovie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
            <div>
              <ul>
                <li>
                  <Link to={'cast'}>cast</Link>
                </li>
                <li>
                  <Link to={'reviews'}>reviews</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Outlet />
      </main>
    ); 
};
export default MovieDetails
