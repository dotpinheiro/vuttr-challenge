import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
    background-color: #fff;
    font-family: "Source Sans Pro";
    font-size:20px;
  }
`;

export default GlobalStyle;
