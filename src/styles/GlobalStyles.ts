import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  a, button {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    background: none;
  }

  button, textarea, input, select, hr {
    border: none;
    outline: none;
  }

  body {
    width: 100vw;
    min-height: 100vh;
  }
  
`;
