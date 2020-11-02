import { createGlobalStyle } from "styled-components";
import sierra from '../resource/images/sierra.jpg';
import reset from 'styled-reset';

const DefaultCss = createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
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