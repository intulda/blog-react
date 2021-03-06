import { createGlobalStyle } from 'styled-components';
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
        font-family: 'Noto Sans KR', sans-serif !important;
        height: 100%;
    }
    a {
        text-decoration: none !important;
        color: inherit;
    };
    #__next {
        height: 100%;
    }
`;

export default DefaultCss;
