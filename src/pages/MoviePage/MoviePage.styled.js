import styled from 'styled-components';

export const SearchForm = styled.form`
    padding-top: 10px;
`

export const SearchButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 25%;
        &.hover {
            background-color: aqua;
        }
`
export const SearhInput = styled.input`
    border: 1px solid black;
    padding: 5px;
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
export const MovieLink = styled.link`
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