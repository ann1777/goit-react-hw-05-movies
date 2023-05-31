import styled from 'styled-components';

export const TrendingMovies = styled.ul`
    list-style: circle;
`

export const MovieItem = styled.li`
    margin-bottom: 10px;
    font-size: 20px;
`

export const Link = styled.link`
    text-decoration: none;
    color: grey;
    &.visited {
        color: grey;
        
        &.hover {
            color: black;
        }
    }
`
export const Suspense = styled.div`
    
`