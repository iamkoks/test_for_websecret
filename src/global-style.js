import { createGlobalStyle } from 'styled-components'

import '../src/styles/fonts/_fonts.css';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 1.2;;
    font-weight: 400;
    font-style: normal;
    font-family: 'Montserrat-Medium';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export { GlobalStyle };
