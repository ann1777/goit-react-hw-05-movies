import styled from 'styled-components';

export const SearchForm = styled.form`
    padding-top: 10px;
`

export const SearchButton = styled.button`
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
export const SearchInput = styled.input`
    border: 1px solid black;
    padding: 10px;
    margin-left: 10px;
        &.hover {
            border: 1px solid black;
            border-color: aqua;
        }
`
export const MoviesList = styled.ul`
    list-style: circle;
`
export const MovieItem = styled.li`
    margin-bottom: 10px;
    font-size: 20px;
`
export const MovieLink = styled.a`
    text-decoration: none;
    color: grey;
        &.hover {
            color: black;
        }
            &.visited {
                color: grey;
            }
    }
`