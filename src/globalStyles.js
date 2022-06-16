import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
  *::selection{
    background-color: #f59fba;
  }
  *::-moz-selection{
    background-color: #f59fba;
  }
  h1,h2,h3,h4,h5,h6{
    display: inline-block;
  }
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Source Sans Pro", sans-serif;
    background-color: #000;
  }
`;

export default GlobalStyle;
