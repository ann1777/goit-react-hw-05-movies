import { Outlet } from 'react-router-dom';
import Suspense from 'react';
import { PageNav, NavLink } from './Navigation.styled';

function Navigation() {
  return (
    <>
    {' '}
    <PageNav>
      <NavLink
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
      >
        Movies
      </NavLink>
    </PageNav>
    <Suspense fallback={<h1>Loading...</h1>}>
        {' '}
        <Outlet />
      </Suspense>
    </>  
  );
}

export default Navigation;
