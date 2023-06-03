import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Suspense = styled.div`
    
`

export const MoreInfoLinks = styled.ul`
    list-style: none; 
    padding-left: 0px;
`

export const StyledLink = styled(NavLink)`
    display: inline-block;
    padding: 7px;
    margin-bottom: 5px;
    border: 1px solid black;
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

export const StyledButton = styled.button`
display: inline-block;
padding: 10px;
margin-bottom: 10px;
margin-top: 10px;
border: 1px solid black; 
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
    gap: 15px;
`

export const MovieDetailsSubWrapper = styled.div`
    max-width: 800px;
    min-width: 100px;
`
  