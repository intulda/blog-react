import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const DefaultCss = createGlobalStyle`
    @import url('http://fonts.googleapis.com/earlyaccess/notosanskr.css');
    ${reset};
    * {
        box-sizing:border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body { 
        font-family: 'Noto Sans KR', sans-serif !important;
        height: 100%;
    }
    a {
        text-decoration:none;
        color:inherit;
    };
    #__next {
        height: 100%;
    }
`

export default DefaultCss;