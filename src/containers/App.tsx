import React, { Component } from 'react';
import TripContainer from './TripContainer';
import Nav from '../components/Nav/Nav';
import Container from '../elements/Container';
import GlobalStyle from '../theme/globalStyle';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Nav />
        <Container>
          <TripContainer />
        </Container>
      </>
    );
  }
}

export default App;
