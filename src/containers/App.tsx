import React from 'react';
import Nav from '../components/Nav/Nav';
import Container from '../elements/Container';
import GlobalStyle from '../theme/globalStyle';
import SearchContainer from './SearchContainer/SearchContainer';

const App = () => (
  <>
    <GlobalStyle />
    <Nav />
    <Container>
      <SearchContainer />
    </Container>
  </>
);

export default App;
