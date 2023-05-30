import styled from 'styled-components';

export const TrendingMovies = styled.ul`
    list-style: circle;
`

export const MovieItem = styled.li`
    margin-bottom: 10px;
    font-size: 20px;
`

export const NavLink = styled.link`
    display: inline-block;
    padding: 10px;
    /* border: 1px solid black; */
    background-color: rgb(235, 235, 235);
    text-decoration: none;
    border-radius: 10px;
    color: black;
    &.visited {
        color: black;
        
        &.hover {
            color: tomato;
        }
    }
`
export const MovieDetailsWrapper = styled.div`
    display: flex;
`

export const MovieDetailsSubWrapper = styled.div`
    margin-left: 5px;
    max-width: 800px;
`
  