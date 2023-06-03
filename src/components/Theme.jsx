import styled, { createGlobalStyle } from 'styled-components';

export const AppBox = styled.div`
    max-width: 1400px;
    margin: 20px auto;
`

export const GlobalStyle = createGlobalStyle`
    box-sizing: content-box;
    body {
        margin: 0;
        padding: 0;
    }
  ul {
  list-style-type: none;
}
a{text-decoration: none}
`;
