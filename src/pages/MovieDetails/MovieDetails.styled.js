import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Suspense = styled.div`
    
`

export const Outlet = styled.div`
   
`

export const StyledLink = styled(NavLink)`
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
  