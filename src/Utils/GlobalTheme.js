import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin:0px;
    font-size: 62.5%;
    background-color:#FFFFF0;
    position:relative;    
}
html, 
body {
    height: 100%;
}
*, *::before, *::after{
    box-sizing:border-box;
}
`;
export default GlobalStyle;
