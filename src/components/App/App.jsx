import { lazy } from 'react';





import { Routes, Route} from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import("../../pages/home/home"))
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));



export const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
