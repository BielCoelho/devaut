import { createGlobalStyle } from 'styled-components';

import { fonts } from './theme/fonts';

export const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #a1a1a3;
  font-family: ${fonts.base};
}
`;
