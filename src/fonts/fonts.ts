import { createGlobalStyle } from "styled-components";

import HelveticaWoff from "./Helvetica.woff";
import HelveticaWoff2 from "./Helvetica.woff2";
import ArialBlackWoff from "./Arial-Black.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Helvetica';
        src: local('Helvetica'), local('Helvetica'),
        url(${HelveticaWoff2}) format('woff2'),
        url(${HelveticaWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Arial-Black';
        src: local('ArialBlack'),
        url(${ArialBlackWoff});
        font-weight:400;
        font-style:normal;
    }
`;
