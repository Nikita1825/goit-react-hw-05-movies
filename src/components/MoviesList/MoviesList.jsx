import { useLocation, Link } from "react-router-dom";
import css from "./MovieList.module.css"
import PropTypes from 'prop-types';


export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title ?? movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
