import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { PageNav, StyledLink } from './Navigation.styled';

function Navigation() {
  return (
    <>
      {' '}
      <PageNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </PageNav>
      <Suspense fallback={<h1>Loading...</h1>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
}

export default Navigation;
