import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  img {
  max-width: 100%;
}

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: ${({ theme: {theme} }) => theme.body};
    color: ${({ theme: {theme} }) => theme.color};
    transition: ${({ theme: {theme} }) => theme.background} 0.4s;
  }
`;