import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const PageNav = styled.nav`
    font-size: 24px;
    text-decoration: none;
    border-bottom: 1px solid black;
  `
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 10px;

    &.active {
        color: tomato;
        text-decoration: none;
        margin-right: 10px;

        &.visited {
            color: inherit;
        }
    }
  `