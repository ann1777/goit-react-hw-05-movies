import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Suspense = styled.div`
    
`

export const MoreInfoLinks = styled.ul`
    list-style: none; 
`

export const StyledLink = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    margin-bottom: 5px;
    /* border: 1px solid black; */
    background-color: lightblue;
    text-decoration: none;
    border-radius: 10px;
    color: black;
    &&.visited {
        color: black;     
        &&.hover {
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
  