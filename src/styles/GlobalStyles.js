// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  button {
    margin: 0.5rem;
  }
`;

export default GlobalStyle;
