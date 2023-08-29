import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }
  
  & body {
    background: #93e4d6;
    color: #111111;
  }

 `
 