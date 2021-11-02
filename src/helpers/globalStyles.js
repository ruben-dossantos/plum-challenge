import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%; 
    }

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: url('fonts/OpenSans/OpenSans-Regular.ttf');
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        box-sizing: border-box;
        color: #222;
        font-family: 'Open Sans';
        font-size: 16px;
        font-size: 1.6rem;
        line-height: 1.5;
    }

    a {
        color: #222;
        text-decoration: none;
    }

    a:hover, a:focus, a:active {
        text-decoration: none;
    }
`;

export default GlobalStyle;
