// import { NavLink } from 'react-router-dom';
import { PageNav, NavLink } from './Navigation.styled';

function Navigation() {
  return (
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
  );
}

export default Navigation;
