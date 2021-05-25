import {createGlobalStyle} from 'styled-components';
import colors from './colors';
import fonts from './fonts';

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: ${fonts.primary};
    }
    body {
        background-color: ${colors.white2};
        margin: 0;
    }
`;