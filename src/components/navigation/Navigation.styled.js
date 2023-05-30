import styled from 'styled-components';

export const PageNav = styled.nav`
    font-size: 24px;
    text-decoration: none;
    border-bottom: 1px solid black;
  `
export const NavLink = styled.link`
    /* color: tomato; */
    text-decoration: none;
    margin-right: 10px;

    &.active {
        color: tomato;
        text-decoration: none;
        margin-right: 10px;
    }
  `