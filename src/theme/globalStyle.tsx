import { createGlobalStyle } from 'styled-components/macro';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
body {
  margin: 0;
  padding: 0;
  background-color: ${colors.background};
  font-family: 'Lato', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
