import { createGlobalStyle } from "styled-components";
import AppBg from "/images/bg.jpg";
import AppBg2x from "/images/bg@2x.jpg";

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
    height: 100vh;
    background-image: url(${AppBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: "Lato", sans-serif;

    @media (min-width: 1024px) {
      background-image: url(${AppBg2x});
    }
  }

  #root {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, #000 -10.63%, rgba(0, 0, 0, 0.00) 85.07%);

    display: grid;
    grid-template-rows: 1fr 4.125rem; 

    @media (min-width: 1024px) {
      grid-template-rows: 1fr 5.375rem; 
    }
  }

`;
