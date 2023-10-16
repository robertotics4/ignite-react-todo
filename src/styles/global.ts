import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1a1a1a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Inter, sans-serif;
    color: #f2f2f2;
  }

  button {
    cursor: pointer;
  }
`;