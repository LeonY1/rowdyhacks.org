import { createGlobalStyle } from "styled-components";

import HelveticaWoff from "./Helvetica.woff";
import HelveticaWoff2 from "./Helvetica.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Helvetica';
        src: local('Helvetica'), local('Helvetica'),
        url(${HelveticaWoff2}) format('woff2'),
        url(${HelveticaWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
