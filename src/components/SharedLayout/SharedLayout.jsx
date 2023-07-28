
import { Suspense } from 'react';
import { NavLink, Outlet,  } from 'react-router-dom';
import css from './Share.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className={css.home} to={'/'}>
            Home
          </NavLink>
          <NavLink className={css.movies} to={'/movies'}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
              </Suspense>
              
      </main>
    </>
  );
};
